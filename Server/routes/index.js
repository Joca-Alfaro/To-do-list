const express = require('express');
const router = express();


//imports
const tareas = require('./tareas');
const usuarios = require('./usuarios');
//routes

router.use(express.json());
router.use('/tareas', tareas);
router.use('/usuarios', usuarios);
//disposibilities


module.exports = router;