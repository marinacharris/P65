const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//conectar con la base de datos
mongoose.connect('mongodb://127.0.0.1:27017/crudp65')
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.log(err))


//configurar puerto
app.set('port', process.env.PORT || 5000);

//Servidor escuchando
app.listen(app.get('port'), ()=>{
    console.log("Servidor escuchando en puerto," + app.get('port'));
});

//Archivos estáticos
//console.log(__dirname+'\\public');
app.use(express.static(__dirname+'\\public'))

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Rutas
app.use(require('./routes/tasks'));
