const Bonus = require('../models/bonus.model');
const User = require('../models/user.model');

const bonusControler = {};

bonusControler.getCards = async (req, res) => {
    const bonus = await Bonus.find();
    res.json(bonus);
}
bonusControler.redeemBonus = async (req, res) => {
    const { id, name } = req.params;
    const bonus = {
        bonus:{
            id: id,
            name: name
        }
    }
    await User.findByIdAndUpdate(id, {$push: bonus});
    res.json({status: "Bonus redeemed"});
}


module.exports = bonusControler;