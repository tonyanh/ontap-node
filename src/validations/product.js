import joi from "joi"

const productSchema = joi.object({
    name: joi.string().required().min(3),
    price: joi.number().required(),
    description: joi.string(),
})

export default productSchema