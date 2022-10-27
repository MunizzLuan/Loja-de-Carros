const connection = require("../connection");
const securePasword = require("secure-password");

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
        const usuarioRegistrado = await connection.query(query, [
            nome,
            email,
            senha
        ]);
        if (usuarioRegistrado.rowCount === 0) {
            return res.status(400).json("Erro no cadastro")
        }
        return res.status(201).json("Usuário cadastrado")
    } catch (e) {
        return res.status(500).json(e.message)
    }
}



module.exports = registroUsuario;