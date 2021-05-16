const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NoticesSchema = new Schema({
    name: {
        type: String,
    },
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    department: {
        type: Array,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Notification = mongoose.model('notification', NoticesSchema)