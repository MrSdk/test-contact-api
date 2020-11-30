let mongoose = require("./../db/db")
let jwt = require("jsonwebtoken")

let UserSchema = mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
})

UserSchema.statics.generateToken = function( user ){
    return jwt.sign({ email: user.email, password: user.password },process.env.JWT_KEY)
}

UserSchema.statics.decoding = function( token ){
    return jwt.verify( token , process.env.JWT_KEY )
}

module.exports = mongoose.model('user', UserSchema )