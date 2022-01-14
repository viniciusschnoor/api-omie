const express = require("express");
const cors = require("cors");
const request = require("request");

const server = express();

server.use(cors());
server.use(express.json());

server.get("/produtos", (req, res) => {
     var params = {
        "call": "ListarProdutos",
        "app_key": "1011945321387",
        "app_secret": "45efc088f8e481cafc67cb074b49aa51",
        "param": [{
            "pagina": 1,
            "registros_por_pagina": 50,
            "apenas_importado_api": "N"
        }]
    }
        
    request({
        url: 'https://app.omie.com.br/api/v1/geral/produtos/',
        method: "POST",
        json: true,
        body: params
    }, function (error, response, body) {
        return res.json(body);
    });
});

server.listen(3030, () => {
    console.log("Servidor iniciado com sucesso!");
});
