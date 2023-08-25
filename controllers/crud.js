const conexion = require('../database/db');

//GUARDAR ALUMNO
//el action=save del formulario create.ejs
exports.save = (req, res) => {
    const apellido = req.body.apellido; //el user es por el id del formulario en create.ejs
    const nombre = req.body.nombre;
    const dni = req.body.dni;

    //Aplicamos la query para agregar el alumno
    conexion.query('INSERT INTO alumnos SET ?', {apellido:apellido, nombre:nombre, dni:dni}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}

//ACTUALIZAR
exports.update = (req, res) => {
    const id = req.body.id;
    const apellido = req.body.apellido;
    const nombre = req.body.nombre;
    const dni = req.body.dni;
    conexion.query('UPDATE alumnos SET ? WHERE id = ?', [{apellido:apellido, nombre:nombre, dni:dni},  id], (error, results) => {
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}