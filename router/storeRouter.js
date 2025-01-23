const {createStore,getAll,getOne, updateUser, deleteStore} = require("../controller/storeController")

const router = require("express").Router()

router.post("/store",createStore )

router.get("/store",getAll)

router.get("/store/:id",getOne)
 router.put("/store/:id", updateUser)

 router.delete("/store/:id", deleteStore)

module.exports = router