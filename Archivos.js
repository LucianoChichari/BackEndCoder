const fs = require ('fs');
let title = "objeto nuevo"
let price = 30;

class Contenedor {
    constructor(archivo,title, price){
    this.archivo = archivo;
    }

    getAll(){
        let data = fs.readFileSync('Archivo.txt', 'utf-8');
        let misdatos = JSON.parse(data);
        return(misdatos)
    }
    save(){
        let data = fs.readFileSync('Archivo.txt', 'utf-8');
        let misdatos = JSON.parse(data);

        let filtroid = misdatos.map(function(element){
            return `${element.id}`
        })

        let idnuevo = filtroid.length + 1 ;

        console.log("Id Asignado a nuevo objeto", idnuevo)

        misdatos.push({"title": title, "price": price, "id": idnuevo});
        let misdatosatxt = JSON.stringify(misdatos)
        fs.writeFile("archivo.txt", misdatosatxt, (err, dato)=>{
            if(err){
                console.log("err", err)
            } else{
                console.log("Todo bien")
            }
        })

    }

    getByRandomId(){
        let data = fs.readFileSync('Archivo.txt', 'utf-8');
        let misdatos = JSON.parse(data);

        let filtroid = misdatos.map(function(element){
            return `${element.id}`
        })

        let idmaximo = filtroid.length  ;

        const rndInt = Math.floor(Math.random() * idmaximo) + 1
        
        return(rndInt)

    }

    getById(num){
        let data = fs.readFileSync('Archivo.txt', 'utf-8');
        let misdatos = JSON.parse(data);
        
        
        let filtroid = misdatos.map(function(element){
            return `${element.id}`
        })

        var resultado = misdatos.find(function(e){
            return e.id == num;
        });

        if (resultado === undefined){
            console.log("Objeto no encontrado")
        }else{
            return("Objeto Filtrado por Id: ", resultado)
        }
        
    }

    deleteById(num){
        let data = fs.readFileSync('Archivo.txt', 'utf-8');
        let misdatos = JSON.parse(data);

        let aborrar = misdatos.filter((a) => {return a.id !==num})
        let actualizado = JSON.stringify(aborrar)

        fs.writeFile("Archivo.txt", actualizado, (err, dato) => {
            if(err){
                console.log("error")
            }
            else(console.log("Objeto borrado de la lista"))
        })
    }

    deleteAll(){
        fs.writeFile("archivo.txt", '', function(){console.log('todo borrado')})
    }
   
    
}

const file = process.argv[2];
module.exports = new Contenedor (file)


