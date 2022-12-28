const express = require('express');
const router = express()

const { CreateFavs, ReadFavs, UpdateFavs, DeletFavs } = require('../Controllers/favorites.controller');



//routes
router.post('/create', CreateFavs);



router.get('/', ReadFavs);

// router.put('/update', UpdateTasks);

router.put('/update', UpdateFavs);

router.put('/delete', DeletFavs)
//disponibilidades



module.exports = router;