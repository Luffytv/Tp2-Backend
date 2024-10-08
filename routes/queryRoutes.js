const express = require('express');
const userQueryController = require('../controllers/userQueryController');
const router = express.Router();

router.get('/users', userQueryController.getUsers);
router.get('/users', userQueryController.getUserById);

module.exports = router;