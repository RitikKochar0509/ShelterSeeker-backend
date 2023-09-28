require('dotenv').config();
const express = require('express');

const app =express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})

const db = mongoose.connection
db.on('error',(error)=>console.log(error));
db.once('open',()=>console.log("databaseconntected"));

app.use(express.json());

const properyRoutes = require("./routes/propertyRoutes");
app.use('/api',properyRoutes);

app.listen(3000,()=>console.log("server started"));