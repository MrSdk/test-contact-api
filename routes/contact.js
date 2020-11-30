let router = require("express").Router()
let controller = require("./../controllers/contact")

let authenticate = require("./../middleware/auth")

router.route('/') 
    .get( authenticate, controller.getAll )
    .post( authenticate, controller.create );

router.route('/:id') 
    .get( authenticate, controller.get )
    .patch( authenticate, controller.update )
    .delete( authenticate, controller.delete )
 
module.exports = router