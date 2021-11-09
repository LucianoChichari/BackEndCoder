const express = require("express");
const path = require("path")
const handlebars = require("express-handlebars")
let {config} = require("./config")
const serverRoutes = require("./routes")
let Sockets = require("./utils/sockets")
const { Server: HttpServer } = require('http');

const app = express();
let httpServer = new HttpServer(app);
let socket = new Sockets(httpServer);
socket.listenConnection();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("views", path.join(__dirname, "views", "ejs"))
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "views")));
const cors = require("cors");
app.use(cors(`${config.cors}`));

serverRoutes(app);
httpServer.listen(process.env.PORT, ()=>{
    console.log(`Connected to URL:: http://localhost:${config.port}`)
});
app.on("error", err => console.log("Fallo de conexion al servidor", err));