let mongoose = require("./../db/db")

let ContactSchema = mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: Number, required: true, unique: true }
})

module.exports = mongoose.model('contact', ContactSchema )