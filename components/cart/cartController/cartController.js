const fs = require("fs")


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

class CartController {

    getAll() {
        try {
            return cart_arr
        } catch (error) {
            console.log(error)
        }
    }
     getCartById(e) {
        try {
            let data = this.getAll();
            console.log(data)
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
        let filterId = data[0].cartProducts.map((e) =>{
            return e.id
        });
        let newId = filterId.length + 1;
        data[0].cartProducts.push({
                "id": newId,
                "timestamp": Date.now(),
                "name": obj.name,
                "description": obj.description,
                "code": obj.code,
                "url": obj.url,
                "price": obj.price,
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
            "cartProducts": []
        })
        return data;
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
    deleteProductById(a, b){
        try {
            let data = this.getCartById(a);
            let new_arr = data[0].cartProducts.filter((x) => {
                return x.id !== b
            })
            return new_arr
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new CartController()