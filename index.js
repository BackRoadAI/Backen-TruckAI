const express = require('express');
const mongoose = require('mongoose');
const dbConnect = require("./dbConnect")
// const truck_info = require("./models/truck_info")
const user = require("./models/users");
const app = express();
const userRoutes = require("./routes/userRoutes");

const PORT = 3000

app.set('view engine', 'ejs')

app.use("/",userRoutes);


// app.get("/", (req, res) =>{
//     res.render("index");
// })

app.listen(PORT,async (err)=>{
    if(err) console.log(err)
    await dbConnect()
    await console.log(`Server is running on http://localhost:${PORT}`)
});
