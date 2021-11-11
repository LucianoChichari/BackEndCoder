const e = require("express");
const fs = require("fs")

const carritos = [
    {
    "id": 1,
    "productosCart": [
        { "id": 1,
        "timestamp": Date.now(),
        "nombre": "nombre",
        "descripcion": "descripcion",
        "codigo": "codigo",
        "url": "url",
        "precio": "precio",
        "stock": "stock"}
    ]
    }
]

class ContenedorCarrito {

    getAll() {
        try {
            return carritos
        } catch (error) {
            console.log(error)
        }
    }

    getCartById(e) {
        try {
            let data = this.getAll();
            let results = data.filter((x) => {
                return x.id == e
            })
            return results
        } catch (error) {
            console.log(error)
        }
    }

    newProductInCart(obj, num){
        try {
            let data = this.getCartById(num);
            console.log(data)
        let filterId = data[0].productosCart.map((e) =>{
            return e.id
        });
        let newId = filterId.length + 1;
        data[0].productosCart.push({
                "id": newId,
                "timestamp": Date.now(),
                "nombre": obj.name,
                "descripcion": obj.description,
                "codigo": obj.code,
                "url": obj.url,
                "precio": obj.price,
                "stock": obj.stock
        })
        return data;
        } catch (error) {
            console.log(error)
        }
    }

    newCart(){
        try {
            let data = this.getAll();
        let filterId = data.map((e) =>{
            return e.id
        });
        let newId = filterId.length + 1;
        data.push({
            "id": newId,
            "productosCart": []
        })
        return data;
        } catch (error) {
            console.log(error)
        }
        
    }

    deleteProductById(a, b){
        try {
            let data = this.getCartById(a);
            let new_arr = data[0].productosCart.filter((x) => {
                return x.id !== b
            })
            return new_arr
        } catch (error) {
            console.log(error)
        }
    }

    deleteById(e){
        try {
            let data = this.getAll();
            let new_arr = data.filter((x) => {
                return x.id !== e
            })
            return new_arr
        } catch (error) {
            console.log(error)
        }
    }
    
}

module.exports = new ContenedorCarrito()