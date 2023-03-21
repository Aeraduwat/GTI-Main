//RUTAS 
const express = require('express');
const router = express.Router();
const evaluacionController = require('../controllers/evaluacionesController');

//api
//crear
router.post('/', evaluacionController.crearEvaluacion);
//mostrar
router.get('/',evaluacionController.obtenerEvaluaciones);
//actualizar
router.put('/:id',evaluacionController.actualizarEvaluacion);
//mostrar 1
router.get('/sh/:id_sh',evaluacionController.obtenerPorSh);
//eliminar
router.delete('/:id',evaluacionController.eliminarEvaluacion);

module.exports = router;