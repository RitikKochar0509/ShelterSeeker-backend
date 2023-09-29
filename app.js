const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors'); // Import the cors middleware
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8000;

mongoose.connect('mongodb+srv://ritikkochar2:T0kFC4oBLqwumJFX@shelterseeker.7kjxe02.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log("database connected"));

// Use the cors middleware to enable CORS for all routes
app.use(cors());

app.use(express.json());

const properyRoutes = require("./routes/propertyRoutes");
app.use('/api', properyRoutes);

app.listen(PORT, () => console.log("server started"));
