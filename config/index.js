require("dotenv").config();

let config = {
    port: process.env.PORT || 3000,
    cors: process.env.CORS || "*",
    url: process.env.MONGODB_URI,
    db_name: process.env.DB_NAME
}

module.exports = {config}