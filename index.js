const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;
const path = require("path")
const serverRoutes = require("./routes/indexRoutes")

app.use("/html", express.static(path.join(__dirname, "views")));

app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res)=> {
    res.send(true)
})

serverRoutes(app);

app.listen(PORT, ()=>{
    console.log(`Connected to URL:: http://localhost:${PORT}`)
});

app.on("error", err => console.log("Fallo de conexion al servidor", err));