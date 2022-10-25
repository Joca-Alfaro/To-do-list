const express = require('express');
const router = express()


//imports


const { CreateTasks, ReadTasks, UpdateTasks, UpdateTareas, DeletTask } = require("../Controllers/tareas.contoller");



//routes
router.get('/', ReadTasks)

router.get('/all', ReadTasks);
router.post('/create', CreateTasks);

// router.put('/update', UpdateTasks);

router.put('/actualizar', UpdateTareas);

router.put('/delete', DeletTask)
//disponibilidades



module.exports = router;