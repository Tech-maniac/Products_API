require("dotenv").config();
const express = require("express");
const app = express();

const connectDB = require("./db/connect")

const PORT = 3000;

const products_route = require("./routes/products");

//Router setup
app.use("/api/products",products_route);

// app.get("/",(req,res)=>{
//     res.send("Hello world, how are  you?!")
// });

const start=async()=>
{
    try
    {
        console.log("Working");
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
            console.log(`Server is running on : ${PORT}`);
        })
    }
    catch(error)
    {
        console.log(error);
    }
}
start();

