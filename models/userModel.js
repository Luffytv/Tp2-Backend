const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    dni: { type: String, required: true },
}, {
    timestamps: true // Esto añade automáticamente createdAt y updatedAt
});

const User = mongoose.model('User', userSchema);
module.exports = User;