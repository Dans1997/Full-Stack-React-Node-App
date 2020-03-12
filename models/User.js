const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
});

// Create a New Collection of Users
mongoose.model('users', userSchema);