const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser")
const jsonwebtoken = require("jsonwebtoken")
const dbConnect = require("./dbConnect")
const user = require("./models/users");
const userRoutes = require("./routes/userRoutes");
const truckRoutes = require("./routes/truckRoutes");
const PORT = 3000

const app = express();

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.json()); 


app.use("/",userRoutes);
app.use("/trucks",truckRoutes);

app.listen(PORT,async (err)=>{
    if(err) console.log(err)
    await dbConnect()
    await console.log(`Server is running on http://localhost:${PORT}`)
});