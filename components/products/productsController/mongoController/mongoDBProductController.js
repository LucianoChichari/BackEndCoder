const { model, Schema } = require("mongoose")
let { mongoose, connection} = require("../../../../daos/mongodb");
let {productSchema} = require("../../../models/productSchema");
const schemaProduct = new Schema(productSchema);
const productModel = model("productos", schemaProduct);

class MongoDB_Controller {
    async createCollection(){
        const productos = [{
            "title": "producto 1",
            "price": 20,
            "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png"
        }, {
            "title": "producto 3",
            "price": 10,
            "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png"
        }, {
            "title": "producto 4",
            "price": 23,
            "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png"
        }, {
            "title": "producto 5",
            "price": 30,
            "thumbnail": "https://cdn1.iconfinder.com/data/icons/feather-2/24/scissors-512.png"
        }]
        try {
        const createProduct = [];
        for (const product of productos) {
            createProduct.push(productModel.create(product));
        }
        const result = await Promise.allSettled(createProduct)
        let response = result.filter(e => e.status == "rejected");
        if (response.length > 0) {
            console.log("Falló", response)
        } else {
            console.log("Todo ok")
        }
        await mongoose.disconnect();
        console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
     getAll = async (req, res) => {
        try {
            let response = await productModel.find({});
            res.json(response)
        } catch (error) {
            console.log(error)
        }
    }

    newProd = async (req, res) => {
        try {
            let obj = req.body;
            await productModel.create(obj);
            res.send("Producto añadido")
        } catch (error) {
            console.log(error)
        }
    }

    updateProd = async (req, res) => {
        try {
            let filter = {id : req.body._id}
            let newProd = {
                title: req.body.title,
                price: req.body.price,
                thumbnail: req.body.thumbnail
            }
            await productModel.updateOne(filter, newProd);
            res.json(`se actualizo el producto ${filter.id}`)
        } catch (error) {
            console.log(error)
        }
    }
    deleteProd = async (req, res) => {
        try {
            let {id} = req.body.id
            await productModel.deleteOne(id);
            res.send("el producto ha sido eliminado")
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new MongoDB_Controller()