
const getAllProducts=async(req,res)=>{
    console.log("Inside All products");
    res.send("Welcome to all products")
}   

const getAllProductsTesting=async(req,res)=>{
    console.log("Inside Testing All products");
    res.send("Welcome to TESTING")
}   

const getAboutUsData=async(req,res)=>{
    console.log("Inside Testing All products");
    res.send("Welcome to About us")
}   


module.exports = {getAllProducts,getAllProductsTesting,getAboutUsData}

