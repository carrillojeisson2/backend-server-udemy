// Requires
var express = require('express');

var mongoose = require('mongoose');


// Inicializar variables
var app = express();


// Conexion a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {

    if (err) throw err;

    console.log('Hey Base de datos: \x1b[41m%s\x1b[0m', ' online');

})


// Rutas
app.get('/', (req, res, next) => {

    res.status(200).json({
        ok: true,
        messaje: 'Peticion realizada correctamente kein'
    });
});



// Escuchar peticiones
app.listen(3000, () => {
    console.log('Hey Express server puerto 3000: \x1b[41m%s\x1b[0m', ' online');
})