require('dotenv').config();
const express = require('express');

const app =express();
const mongoose = require("mongoose");
const PORT = process.env.PORT;
mongoose.connect(process.env.DATABASE_URL,
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