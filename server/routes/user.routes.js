const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller');

router.get('/', userCtrl.welcomeMessage);
router.post('/', userCtrl.userRegistration);

module.exports = router;