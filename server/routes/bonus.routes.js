const express = require('express');
const router = express.Router();
const bonusCtrl = require('../controllers/bonus.controller');


router.get('/', bonusCtrl.getCards);
router.put('/:obj', bonusCtrl.redeemBonus);

module.exports = router;