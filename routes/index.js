let products = require("../components/products");
let carrito = require("../components/cart");


module.exports = (app) => {
    products(app)
    carrito(app)

    app.get("/", (req, res, next) => {
        res.send("Alo")
    })
}