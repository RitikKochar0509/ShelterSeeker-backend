require('dotenv').config();
const express = require('express');

const app =express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;
mongoose.connect('mongodb+srv://ritikkochar2:T0kFC4oBLqwumJFX@shelterseeker.7kjxe02.mongodb.net/?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection
db.on('error',(error)=>console.log(error));
db.once('open',()=>console.log("databaseconntected"));

app.use(express.json());

const properyRoutes = require("./routes/propertyRoutes");
app.use('/api',properyRoutes); 

app.listen(PORT,()=>console.log("server started"));