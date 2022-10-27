const express = require("express");
const usuarios = require("./controllers/usuario");

const router = express();

router.post("/user/create", usuarios.registroUsuario);
router.post('/login', usuarios.login);

module.exports = router;