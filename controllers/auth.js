let ErrorHandler = require("../utils/errorHandler")
  
let User = require("./../models/user") 
  
module.exports.login = (req,res) => {
  let body = {
    email: req.body.email,
    password: req.body.password
  }
  
    User.findOne( body ).then(result => {
        if(!result) return new ErrorHandler("Not found",res);

        let token = User.generateToken(result)

        res.status(200).json({token})

      }).catch(e => new ErrorHandler(e,res))
} 

module.exports.register = (req,res) => {
  let body = {
    email: req.body.email,
    password: req.body.password
  }
  let newUser;

  newUser = new User(body)

  newUser.save().then(result => {
      let token = User.generateToken(result)

      res.status(201).json({token})
  }).catch(e => new ErrorHandler(e,res))
}