let http = require("http")
let path = require("path")
let express = require("express")
let app = express();
let bodyParser = require("body-parser")
let cors = require("cors")
const debug = require("debug")("node-angular");
require('dotenv').config()

const fs = require('fs');

const normalizePort = val => {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
};

const onError = error => {
    if (error.syscall !== "listen") {
        throw error;
    }
    const bind = typeof port === "string" ? "pipe " + port : "port " + port;
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const onListening = () => {
    const addr = server.address();
    const bind = typeof port === "string" ? "pipe " + port : "port " + port;
    debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || 8080);
app.set("port", port);

app.use( cors() )
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended: true } ) )
 
app.get('/',(req,res)=> res.status(200).json({ msg: "Server is running on PRODUCTION !" }) )
app.use('/api', require("./routes/index") )

let server = http.createServer(app)

server.on("error", onError);
server.on("listening", onListening);
server.listen(port, ()=>{
    console.log( `Server is running on port ${port}` );
})