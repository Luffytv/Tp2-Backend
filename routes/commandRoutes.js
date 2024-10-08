const express = require('express');
const userCommandController = require('../controllers/userCommandController');
const router = express.Router();

router.post('/user', userCommandController.createUser);
router.put('/user/:id', userCommandController.updateUser);
router.delete('/user/:id', userCommandController.deleteUser);

module.exports = router;