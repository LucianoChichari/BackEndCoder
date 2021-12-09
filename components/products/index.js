let { Router } = require("express");
let router = new Router();
let productsController = require("./productsController/productsController");
let mongoProductController = require("./productsController/mongoController/mongoDBProductController");

//Usar Product Controller desde Firebase
let firebaseProductController = require("./productsController/firebaseController/firebaseProductController");
let Admin = false;

module.exports = (app) => {
    app.use("/", router);

        // if(Admin) {

            // router.get("/api/productos", (req, res)=> {
            //     // let response = productsController.getAll();
            //     let response = mongoProductController.getAll()
            //     res.json(response)
            // })

            //Product Controller desde MongoDB
            router.get("/api/productos", mongoProductController.getAll)
            router.post("/api/productos", mongoProductController.newProd)
            router.put("/api/productos", mongoProductController.updateProd)
            router.delete("/api/productos", mongoProductController.deleteProd)
            
            router.get("/api/productos/:id", (req, res)=> {
                let { id } = req.params
                let response = productsController.getProdById(parseInt(id));
                res.json(response)
            })
            router.post("/api/productos", (req, res) =>{
                    let obj = req.body;
                    let prod = productsController.newProd(obj)
                    res.json(prod)
            })
                
            router.put("/api/productos/:id", (req, res) => {
                    let { id } = req.params
                    let response = productsController.updateProduct(req.query, parseInt(id))
                    res.json(response)
            })
                
            router.delete("/api/productos/:id", (req, res)=> {
                    let { id } = req.params;
                    let response = productsController.deleteById(parseInt(id));
                    res.json(response)
            })

        // } else {
            
        //      // router.get("/api/productos", (req, res)=> {
        //     //     // let response = productsController.getAll();
        //     //     let response = mongoProductController.getAll()
        //     //     res.json(response)
        //     // })

        //     // router.get("/api/productos", mongoProductController.getAll)
            
        //     // router.get("/api/productos/:id", (req, res)=> {
        //     //     let { id } = req.params
        //     //     let response = productsController.getProdById(parseInt(id));
        //     //     res.json(response)
        //     // })
            
            
        // }


}