const express = require("express");
const registroUsuario = require("./controllers/usuario");

const router = express();

router.post("/user/create", registroUsuario);

module.exports = router;