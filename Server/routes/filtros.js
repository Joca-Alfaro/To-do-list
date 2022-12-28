const express = require('express');
const router = express()

const { CreateFilter, ReadFilter, UpdateFilter, DeletFilter } = require('../Controllers/filtros.controller');



//routes
router.post('/create', CreateFilter);



router.get('/', ReadFilter);

// router.put('/update', UpdateTasks);

router.put('/update', UpdateFilter);

router.put('/delete', DeletFilter)
//disponibilidades



module.exports = router;