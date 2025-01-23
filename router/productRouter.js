
const {createProduct} = require("../controller/productController")

const productRouter = require("express").Router()


productRouter.post("/product/:id", createProduct)


module.exports = productRouter


