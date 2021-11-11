const {Router} = require("express");
const router = Router();
let contenedor = require("../services/index");
let products = require("../products")
let cart = require ("../cart")

function serverRouter(app) {
    
    products(app)
    cart(app)
    
    app.get("/", (req, res) =>{
    res.send(true)
    })

}

module.exports = serverRouter;