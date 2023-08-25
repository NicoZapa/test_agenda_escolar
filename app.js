const express = require('express');
const app = express();

app.set('view engine', 'ejs');

//Para poder utilizar el CRUD utilizamos estos 2 middlewares
//Ayudan a procesar los datos en las solicitudes entrantes en una aplicación web.
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use('/', require('./router'));

app.listen(5000, () => {
    console.log('SERVER corriendo');
});