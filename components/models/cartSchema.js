let Joi = require("joi");


const cartSchema = {
    "id": Joi.string().required(),
    "cartProcucts": [{
        "id": Joi.number().required(),
        "timestamp": Joi.number().required(),
        "name": Joi.string().min(3).required(),
        "description": Joi.string().required(),
        "code": Joi.number().required(),
        "url": Joi.string().required(),
        "price": Joi.number().required(),
        "stock": Joi.number().required()
    }]

}

module.exports = {cartSchema};
