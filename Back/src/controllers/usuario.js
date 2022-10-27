const connection = require("../connection");
const securePasword = require("secure-password");
const jwt = require("jsonwebtoken");
const { query } = require("express");

const pwd = securePasword();

const registroUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    // Verificar se ficou algum campo em branco.
    if (!nome || !email || !senha) {
        return res.status(400).json("Todos os campos são obrigatórios")
    }
    try {
        // Verificar se o cadastro já existe
        const query = "SELECT * FROM usuarios WHERE email = $1";
        const { rowCount: usuarioRows } = await connection.query(query, [email]);

        if (usuarioRows.leght > 0) {
            return res.status(400).json("Usuário já cadastrado");
        }

    } catch (e) {
        return res.status(500).json(e.message);
    }

    try {
        //Criando um Hash com a Senha.
        const hash = (await pwd.hash(Buffer.from(senha))).toString("hex");

        // Fazendo o insert no banco.
        const query = "INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3)"
        //Cadastro do usuário.
        const usuarioRegistrado = await connection.query(query,
            [
                nome,
                email,
                hash
            ]);

        if (usuarioRegistrado.rowCount === 0) {
            return res.status(400).json("Erro no cadastro")
        }
        return res.status(201).json("Usuário cadastrado")
    } catch (e) {
        return res.status(500).json(e.message)
    }
}
// função para fazer login 
const login = async (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json("Campos email e senhas obrigatórios")
    }
    try {
        const query = 'SELECT * FROM usuarios WHERE email = $1';
        const usuario = await connection.query(query, [email]);

        if (usuario.rowCount === 0) {
            return res.status(404).json("Email ou senhas incorretos");
        }


        const usuarioEncontrado = usuario.rows[0];
        // fazendo a verificação do hash no banco de dados
        const resultado = await pwd.verify(
            Buffer.from(senha),
            Buffer.from(usuarioEncontrado.senha, "hex")
        );

        switch (resultado) {
            case securePasword.INVALID_UNRECOGNIZED_HASH:
            case securePasword.INVALID:
                return res.status(400).json("Email ou senha incorretos");
            case securePasword.VALID:
                break;
            case securePasword.VALID_NEEDS_REHASH:
                try {
                    const hash = (await pwd.hash(Buffer.from(senha))).toString("hex");
                    const query = "UPDATE usuarios SET senha = $1 WHERE email = $2";
                    await connection.query(query, [hash, email]);
                } catch { }
                break;
        }

        // gerando o token de login 
        const token = jwt.sign(
            {
                id: usuarioEncontrado.id,
                nome: usuarioEncontrado.nome,
                email: usuarioEncontrado.email,
            },
            "tokenverificado@123",
            {
                expiresIn: "2h"
            }
        )
        return res.send(token)

    } catch (e) {
        return res.status(500).json(e.message)
    }
}

module.exports = {
    registroUsuario,
    login
}