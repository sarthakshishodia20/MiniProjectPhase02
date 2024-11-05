const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
    username: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['author', 'reader'],
        required: true
    }
});
userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

const User = mongoose.model("User", userSchema);

module.exports = User; 
