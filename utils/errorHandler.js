module.exports = class ErrorHandler {
    constructor(msg,res){ 
        res.status(400).json( {msg} )
    }
}