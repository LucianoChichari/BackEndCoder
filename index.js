const express = require("express");
let {config} = require("./config");
const serverRoutes = require("./routes");

//Initialization
const app = express();


//Settings 
app.use(express.json());
app.use(express.urlencoded({extended: true}))


//Middlewares
const cors = require("cors");
app.use(cors(`${config.cors}`));


serverRoutes(app);
app.listen(config.port, () => {
    console.log(`Connected to http://localhost:${config.port}`)
});
app.on("Error", err => console.log("Fallo en la conexión con el servidor", err));