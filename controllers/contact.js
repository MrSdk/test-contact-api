let ErrorHandler = require("../utils/errorHandler")
  
let Contact = require("./../models/contact") 
  
module.exports.get = (req,res) => {
    let id = req.params.id;
    Contact.findById(id).then(result => {
        if(!result) return new ErrorHandler("Not found",res);

        res.status(200).json(result)
    }).catch(e => new ErrorHandler(e,res))
}

module.exports.getAll = (req,res) => {
  Contact.find().then(result => {
      res.status(200).json(result)
  }).catch(e => new ErrorHandler(e,res))
}

module.exports.update = (req,res) => {
  let id = req.params.id;
  let body = req.body;
  Contact.findByIdAndUpdate(id,{ $set: body },{ new: true }).then(result => {
      if(!result) return new ErrorHandler("Not found",res);

      res.status(200).json(result)
  }).catch(e => new ErrorHandler(e,res))
}

module.exports.delete = (req,res) => {
  let id = req.params.id; 
  Contact.findByIdAndRemove( id ).then(result => {
      if(!result) return new ErrorHandler("Not found",res);

      res.status(200).json(result)
  }).catch(e => new ErrorHandler(e,res))
}

module.exports.create = (req,res) => {
  let body = {
    name: req.body.name,
    phone: req.body.phone
  }
  let newContact;

  newContact = new Contact(body)

  newContact.save().then(result => {
      res.status(201).json(result)
  }).catch(e => new ErrorHandler(e,res))
}