const express = require('express');
const router = express();

//Tag

//imports
const tareas = require('./tareas');
const usuarios = require('./usuarios');
const folders = require('./folder');
const favorites = require('./favorites');
const filters = require('./filtros');
const etiquetas = require('./etiquetas');
//routes

router.use(express.json());
router.use('/tareas', tareas);
router.use('/usuarios', usuarios);
router.use('/folders', folders);
router.use('/favorites', favorites);
router.use('/filtros', filters);
router.use('/etiquetas', etiquetas);

//disposibilities


module.exports = router;