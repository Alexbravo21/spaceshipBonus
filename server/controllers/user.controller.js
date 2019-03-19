const User = require('../models/user.model');

const userController = {};

userController.userRegistration = async (req, res) => {
    const user = await User.find();
    res.json(user);
}
userController.welcomeMessage = async (req, res) => {
    const user = await User.find();
    res.json(user);
}

module.exports = userController;