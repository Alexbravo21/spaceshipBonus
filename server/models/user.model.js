const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    bonuses: [{
        used: { type: Number },
        bonus: [{ 
            id:{ type: String },
            name:{ type: String }
        }]  
    }]
});

module.exports = mongoose.model('User', UserSchema);