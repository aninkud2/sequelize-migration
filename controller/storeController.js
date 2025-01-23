const {stores} = require("../models")

const {v4:uuidv4} = require("uuid")
exports.createStore=async (req,res)=>{
try {
    const data ={
        id:uuidv4(),
        storeName:req.body.storeName,
        location:req.body.location,
        email:req.body.email
    }
    
    const newStore =await stores.create(data)

    res.status(201).json({
        message:`new store created`,
        data:newStore
    })
    
} catch (error) {
    res.status(500).json({error:error.message})
}

} 

exports.getAll=async(req,res)=>{
    try {
        const allUser = await stores.findAll()
        
        res.status(200).json({message:`Kindly find below all stores`,"total number of stores":allUser.length,data:allUser})
    } catch (error) {
        res.status(500).json({error:error.message}) 
    }
}
exports.getOne=async(req,res)=>{
    try {
        const store =await  stores.findByPk(req.params.id)
        if(!store){
           return  res.status(404).json("Store not found")
        }
        res.status(200).json({
            message:`kindly find below user with the above id`,
            data:store
        })        
    } catch (error) {
        res.status(500).json({error:error.message}) 
  
    }
}

exports.updateUser =async(req,res)=>{

try {
    const store =await  stores.findByPk(req.params.id)
    if(!store){
       return  res.status(404).json("Store not found")
    }
const newInfo =await store.update({
 storeName:req.body.storeName ,
location:req.body.location
})
res.status(200).json({message:`store updated`,data:newInfo}) 
} catch (error) {
    res.status(500).json({error:error.message}) 
}

}








exports.deleteStore =async(req,res)=>{
    try {
        
        const store =await  stores.findByPk(req.params.id)
        if(!store){
           return  res.status(404).json("Store not found")
        }

        store.destroy()
        res.status(200).json("Store deleted")

    } catch (error) {
        res.status(500).json({error:error.message}) 

    }
}