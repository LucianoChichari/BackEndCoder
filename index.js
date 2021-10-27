const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;
const path = require("path");
var exphbs = require('express-handlebars');
const serverRoutes = require("./routes/indexRoutes");

//app.set('views', './viewsPug');
//app.set('view engine', 'pug');

//app.set('views', path.join(__dirname, 'viewsHB'));
//app.engine('handlebars', exphbs({defaultLayout: 'main' }));
//app.set('view engine', 'handlebars');


app.set('views', './views');
app.set('view engine', 'ejs');

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