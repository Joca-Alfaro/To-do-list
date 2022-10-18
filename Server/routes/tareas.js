const express = require('express');
const router = express()


//imports


const {getTareas} = require("../Controllers/tareas.contoller");



//routes
router.get('/', getTareas)


router.get('/all', getTareas);
router.put('/update', getTareas);
router.post('/create', getTareas);
router.post('/delete', getTareas);
//disponibilidades



module.exports = router;