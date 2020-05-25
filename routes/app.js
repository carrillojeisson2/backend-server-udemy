var express = require('express');

var app = express();


// Rutas
app.get('/', (req, res, next) => {

    res.status(200).json({
        ok: true,
        messaje: 'Peticion realizada correctamente kein'
    });
});

module.exports = app;