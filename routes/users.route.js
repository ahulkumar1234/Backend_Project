const express = require('express');
const router = express.Router();
const { getAllUser, createNewUser, loginUser, updateUser, deleteUser } = require("../controllers/users.controller");
const authenticateUser = require('../middlewares/auth.middleware')
// const createNewUser = require("../controllers/users.controller")
// const loginUser = require("../controllers/users.controller")
// const updateUser = require("../controllers/users.controller")
// const deleteUser = require("../controllers/users.controller")

// http://localhost:3000/api/v1/users/


router.get('/', getAllUser)

router.post('/', createNewUser);

router.post('/login', loginUser)

router.patch('/:id', authenticateUser, updateUser);

router.delete('/:id', authenticateUser, deleteUser);

module.exports = router;

