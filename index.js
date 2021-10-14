const express = require('express');
const { archivo } = require('./Archivos');
const archivador = require('./Archivos')

const PORT = 8080;
let app = express();

app.get("/products", (req,res)=>{
    let allprod = archivador.getAll();
    res.status(200).send(allprod);
})


app.get("/productsRandom", (req,res)=>{
    let nrorandom = archivador.getByRandomId();
    let productorandom = archivador.getById(nrorandom)
    res.status(200).send(productorandom);
})

app.get("/",(req,res)=>{


    res.status(200).send({message: 'Available'})
})



app.listen(PORT, ()=>{
    console.log(`Connected to URL:: http://localhost:${PORT}`)
});

app.on("error", err => console.log(`Fallo de conexion al servidor`, err));
//index