const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostStatusSchema = new Schema({
    name: {
        type: String,
    },
    profileImg: {
        type: String,
    },
    email: {
        type: String,
    },
    content: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Poststatus = mongoose.model('poststatus', PostStatusSchema)