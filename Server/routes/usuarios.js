const express = require('express');
const router = express()


//imports


const { CreateUser, ReadUser, UpdateUser, DeleteUser } = require("../Controllers/usuarios.controller");



//routes
router.get('/', ReadUser)


router.get('/all', ReadUser);

router.post('/create', CreateUser);
router.put('/update', UpdateUser);

router.put('/delete', DeleteUser);
//disponibilidades



module.exports = router;