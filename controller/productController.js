const {products} = require("../models")

const {v4:uuidv4} = require("uuid")
exports.createProduct =async(req,res)=>{
    try {


const data={
    id:uuidv4(),
    storeId:req.params.id,
    productName:req.body.productName,
    productQty:req.body.productQty,
    productAmount:req.body.productAmount
}

const newProduct = await products.create(data)
res.status(201).json({message:`new product  added`, data:newProduct})
  } catch (error) {
        res.status(500).json({error :error.message})
    }
}