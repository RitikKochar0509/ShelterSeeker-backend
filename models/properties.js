const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    type: {
        type: String,
        require:true,
     },
    name: {
       type: String,
       require:true,
    },

    description:  {
       type: String,
       require:true,
    },
    surfaceArea:  {
        type: String,
        require:true,
     },
    phone:  {
        type: String,
        require:true,
     },
    building:  {
        type: String,
     },
    level:  {
        type: String,
        require:true,
     },
    location:  {
        type: String,
        require:true,
     },
    price:  {
        type: Number,
        require:true,
     },
    
})

//reason for using .model is it helps us to directly interact this schema with database
// and also we want to import this schema model in different file
module.exports = mongoose.model('property',PropertySchema);