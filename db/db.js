let mongoose = require("mongoose")


mongoose.connect( process.env.MONGO_URL, { useNewUrlParser: true }).then((res) => {
        console.log("Db connected !!!")
    })
    .catch(e => {
        console.log(e);
        console.log("Error to Connect");
    })

mongoose.Promise = global.Promise

module.exports = mongoose;