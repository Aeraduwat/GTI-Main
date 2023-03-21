//RUTAS 
const express = require('express');
const router = express.Router();
const reunionController = require('../controllers/reunionesController');

//api
//crear
router.post('/', reunionController.crearReunion);
//mostrar
router.get('/',reunionController.obtenerReuniones);
//actualizar
router.put('/:id',reunionController.actualizarReuniones);
//mostrar 1
router.get('/:id',reunionController.obtenerReunion);
//eliminar
router.delete('/:id',reunionController.eliminarReunion);

module.exports = router;