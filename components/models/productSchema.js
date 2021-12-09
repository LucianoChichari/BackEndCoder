let Joi = require("joi");

const title = Joi.string().min(3).required();
const price = Joi.number().required();
const thumbnail = Joi.string().required();

const productSchema = {
    title,
    price,
    thumbnail
}

module.exports = {productSchema};