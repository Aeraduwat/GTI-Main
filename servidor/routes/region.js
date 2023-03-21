//RUTAS 
const express = require('express');
const router = express.Router();
const regionController = require('../controllers/regionesController');

//api
//crear
router.post('/', regionController.crearRegion);
//mostrar
router.get('/',regionController.obtenerRegiones);
//actualizar
router.put('/:id',regionController.actualizarRegion);
//mostrar 1
router.get('/:id',regionController.obtenerRegion);
//eliminar
router.delete('/:id',regionController.eliminarRegion);

module.exports = router;