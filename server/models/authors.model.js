const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    authorName: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be at least 3 characters long"]
    }
}, {timestamps: true})

module.exports = mongoose.model('Authors', AuthorSchema)