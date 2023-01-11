const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser")
const morgan = require("morgan")
const dbConnect = require("./dbConnect")
const session = require("express-session")
const user = require("./models/users");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.json());  
app.use(
    session({
    key:"user_id",
    secret : "random stuff",
    resave:false,
    saveUninitialized:false,
    coookie:{
        expires : 600000
    }
}))

const PORT = 3000

app.use("/",userRoutes);

app.listen(PORT,async (err)=>{
    if(err) console.log(err)
    await dbConnect()
    await console.log(`Server is running on http://localhost:${PORT}`)
});
