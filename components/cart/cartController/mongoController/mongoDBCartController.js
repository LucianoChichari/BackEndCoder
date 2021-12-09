const { model, Schema } = require("mongoose")
let { mongoose, connection} = require("../../../../daos/mongodb");
let {cartSchema} = require("../../../models/cartSchema");
const schemaCart = new Schema(cartSchema);
const cartModel = model("carrito", schemaCart);




class MongoDB_CartController {
    async createCart(){
        const cart_arr = [{
            "id": 1,
            "cartProducts": [
               { "id": 1,
                "timestamp": Date.now(),
                "name": "name",
                "description": "description",
                "code": "code",
                "url": "url",
                "price": "price",
                "stock": "stock"}
            ]
        }];
        try {
            const newCart = []
            newCart.push(cart_arr)
            await cartModel.create(newCart)
        } catch (error) {
            console.log(error)
        }
    }

    getCart = async (req, res) => {
        try {
            let cart = await cartModel.find();
            res.json(cart)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new MongoDB_CartController();