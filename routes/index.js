const {Router} = require("express");
const router = Router();
let contenedor = require("../services/index");

function serverRouter(app) {
    
    app.use("/", router);
    
    app.get("/", (req, res) =>{
    res.send(true)
    })
    router.get("/productosEJS", (req, res) => {
        let response = contenedor.getAll()
        res.render("pages/index", {response})
    })

    router.post("/productosEJS", (req, res) => {
        let obj = req.body;
        contenedor.newProd(obj);
        console.log(obj)
        res.redirect("/productosEJS")
    })

    
}




module.exports = serverRouter;