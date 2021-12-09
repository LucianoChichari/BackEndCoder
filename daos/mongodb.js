let mongoose = require("mongoose");
const {config} = require("../config")

let connection = null;

(async ()=>{
    try {
        connection = await mongoose.connect(`${config.url}${config.db_name}`)
        console.log(`Conexion de mongo creada en ${config.url}${config.db_name}`)
    } catch (error) {
        console.log('error al conectarse a Mongo', error)
        
    }
})()
module.exports = {connection, mongoose}