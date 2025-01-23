const PORT = 5673
const router= require("./router/storeRouter")
const productRouter = require("./router/productRouter")
const express = require("express")

const app = express()
app.use(express.json())
app.use(router)
app.use(productRouter)


app.listen(PORT, ()=>{
    console.log("My app is running on port "+PORT)
})