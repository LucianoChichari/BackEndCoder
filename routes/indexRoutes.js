const {Router} = require("express");
const router = Router();
let contenedor = require("../resources/resources");

function serverRouter(app) {
    
    app.use("/", router)


    router.get("/api/productos", (req, res)=> {
        let response = contenedor.getAll();
        res.json(response)
    })
    
    router.get("/api/productos/:id", (req, res)=> {
        let { id } = req.params
        let response = contenedor.getProdById(parseInt(id));
        res.json(response)
    })
    
    
    router.post("/api/productos", (req, res) =>{
        let objeto = req.body;
        console.log(objeto)
        let prod = contenedor.newProd(objeto)
        res.json(prod)
    
    })
    
    router.put("/api/productos/:id", (req, res) => {
        let { id } = req.params
        let response = contenedor.updateProducto(req.query ,parseInt(id));
        res.json(response)
    })
    
    router.delete("/api/productos/:id", (req, res)=> {
        let { id } = req.params
        let response = contenedor.deleteById(parseInt(id));
        res.json(response)
    })
    
}




module.exports = serverRouter;