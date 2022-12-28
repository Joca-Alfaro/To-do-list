const express = require('express');
const router = express()

const { CreateEtiqueta, ReadEtiqueta, UpdateEtiqueta, DeletEtiqueta } = require('../Controllers/etiquetas.controller');



//routes
router.post('/create', CreateEtiqueta);



router.get('/', ReadEtiqueta);

// router.put('/update', UpdateTasks);

router.put('/update', UpdateEtiqueta);

router.put('/delete', DeletEtiqueta)
//disponibilidades



module.exports = router;