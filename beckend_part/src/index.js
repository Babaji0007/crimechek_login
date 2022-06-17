//mongodb+srv://rahul:<password>@cluster0.ojidj.mongodb.net/test
const express  = require("express");
const cors = require("cors")
require("dotenv").config()
const port=process.env.PORT||1212
const app = express();
app.use(express.json());
app.use(cors())
const connect  = require("./configs/db")

const {register,login}=require("./controllers/auth")
app.post("/register",register)
app.post ("/login",login)

app.listen(port,async function(){
    try {
        await connect()
        console.log(`Port ${port} is working fine`)
    } catch (error) {
        console.log(error.message)
    }
})