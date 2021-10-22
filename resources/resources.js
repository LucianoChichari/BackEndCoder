const fs = require("fs")

const productos = [{
    "id": 1,
    "title": "preview",
    "price": 1,
    "thumbnail": "img"
}]

class Contenedor {
    
    getAll() {
        try {
            return productos
        } catch (error) {
            console.log(error)
        }
    }
     getProdById(num) {
        try {
            let data = this.getAll();
            let results = data.filter((x) => {
                return x.id == num
            })
            return results
        } catch (error) {
            console.log(error)
        }
    }
    newProd(objeto){
        try {
            let data = this.getAll();
        let filterId = data.map((e) =>{
            return e.id
        });
        let newId = filterId.length + 1;
        data.push({
            "id": newId,
            "title": objeto.title,
            "price": objeto.price,
            "thumbnail": objeto.thumbnail
        })
        return data;
        } catch (error) {
            console.log(error)
        }
        
    }
    deleteById(num){
        try {
            let data = this.getAll();
            data.splice(1, 1)
            return data
        } catch (error) {
            console.log(error)
        }
    }

    updateProducto(data, num){
        
        try {
            let {title, price, thumbnail} = data;
            let response = this.getProdById(num)

            
            response.map(num => {
                if(num.title !== title){
                    num.title = title
                     if(num.price !== price){
                        num.price = price
                         if(num.thumbnail !== thumbnail){
                            num.thumbnail = thumbnail
                         }
                     }
                }
                return num
            })
            return response;
        
        } catch (error) {
            console.log(error)
        }
        
    }
}

module.exports = new Contenedor()