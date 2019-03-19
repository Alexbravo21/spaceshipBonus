const mongoose = require('mongoose');
const { Schema } = mongoose;

const BonusSchema = new Schema({
    game: { type: String},
    name: { type: String},
    type: { type: String},
    cost: { type: Number},
    blocked: { type: Boolean }
});

module.exports = mongoose.model('Bonus', BonusSchema);