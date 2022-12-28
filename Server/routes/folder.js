const express = require('express');
const router = express()

const { CreateFolder, ReadFolders, UpdateFolder, DeletFolder } = require('../Controllers/folder.controller');



//routes
router.post('/create', CreateFolder);

router.get('/', ReadFolders)

router.get('/all', ReadFolders);

// router.put('/update', UpdateTasks);

router.put('/actualizar', UpdateFolder);

router.put('/delete', DeletFolder)
//disponibilidades



module.exports = router;