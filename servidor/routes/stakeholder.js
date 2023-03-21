//RUTAS 
const express = require('express');
const router = express.Router();
const shController  = require('../controllers/stakeholdersController');


//api
//crear
router.post('/', shController.crearStakeholder);
//mostrar
router.get('/',shController.obtenerStakeholders);
//actualizar
router.put('/:id',shController.actualizarStakeholder);
//mostrar 1
router.get('/:id',shController.obtenerStakeholder);
//mostrar por region
router.get('/region/:id_region',shController.obtenerPorRegion);
//eliminar
router.delete('/:id',shController.eliminarStakeholder);

module.exports = router;