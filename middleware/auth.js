let User = require("./../models/user")

module.exports = async function(req,res,next){
    const bearerHeader = req.headers['authorization']

    if( typeof bearerHeader !== 'undefined' ){

        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1]
        let user, decodedUser;

        try {
            decodedUser = User.decoding( bearerToken )
            user = await User.findOne({ email: decodedUser.email, password: decodedUser.password })

        } catch (error) {
            res.status(401).json({ })
        }

        if( !!user ) next()
        else res.status(401).json({ })

    }else{
        res.status(401).json({ })
    }
}