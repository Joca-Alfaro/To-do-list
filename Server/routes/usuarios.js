const express = require('express');
const router = express()


//imports


const { getUsuarios } = require("../Controllers/usuarios.controller");



//routes
router.get('/', getUsuarios)


router.get('/all', getUsuarios);
router.put('/update', getUsuarios);
router.post('/create', getUsuarios);
router.post('/delete', getUsuarios);
//disponibilidades



module.exports = router;