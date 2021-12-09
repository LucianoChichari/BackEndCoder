let { Router } = require("express");
let router = new Router();
let cartController = require("./cartController/cartController")
let mongoCartController = require("./cartController/mongoController/mongoDBCartController")


//Usar Cart Controller Firebase
let firebaseCartController = require("./cartController/firebaseController/firebaseCartController");

module.exports = (app) => {
    app.use("/", router);


            //Cart desde MongoDB

            router.get("/api/carrito", mongoCartController.getCart)
            router.post("/api/carrito", (req, res)=> {
                let response = mongoCartController.createCart();
                res.json(response)
            })

}