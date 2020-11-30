let router = require("express").Router()
let controller = require("./../controllers/auth")
    
router.route('/login') 
    .post( controller.login )
    
router.route('/register') 
    .post( controller.register )
 
module.exports = router