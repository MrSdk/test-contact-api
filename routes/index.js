let router = require("express").Router()

router.use('/contact', require("./contact") )  
router.use('/auth', require("./auth") )

module.exports = router;