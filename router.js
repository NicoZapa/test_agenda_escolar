const express = require('express');
const router = express.Router();
const conexion = require('./database/db');

router.get('/contacto', (req, res) => {
    res.send('CONTACTO');
})

//MUESTRA TODOS LOS REGISTROS
router.get('/', (req, res) => {

    conexion.query('SELECT * FROM alumnos', (error, results) => {
        if(error){
            throw error;
        }else{
            res.render('index.ejs', {results: results});
        }
    });
    
})

//RUTA PARA AGREGAR ALUMNOS
router.get('/create', (req, res) => {
    res.render('create.ejs');
})

//RUTA PARA EDITAR ALUMNOS
router.get('/edit/:id', (req, res) => {

    //Tomamos el parametro id
    const id = req.params.id;
    
    conexion.query('SELECT * FROM alumnos WHERE id=?', [id], (error, results) => {
        if(error){
            throw error;
        }else{
            res.render('edit.ejs', {alumno: results[0]});
        }
    })
    
})

//RUTA PARA ELIMINAR EL REGISTRO
router.get('/delete/:id', (req, res) => {
    const id = req.params.id; //Capturamos el ID como parametro de la ruta
    conexion.query('DELETE FROM alumnos WHERE id = ?', [id], (error, results) => {
        if(error){
            throw error;
        }else{
            res.redirect('/'); // Vamos a la ruta raiz
        }
    })
})

//INVOCAMOS EL CRUD
const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);

//EXPORTAMOS EL ROUTER PARA QUE LO USE EL app.js
module.exports = router;