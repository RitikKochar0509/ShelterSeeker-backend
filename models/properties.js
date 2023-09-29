const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    image:{
      type:String,
      require:true,

    },
    propertyName:{
      type:String,
      require:true,
    },
    propertyRent:{
      type:String,
      require:true
    },
    propertyLocation:{
      type:String,
      require:true,
    },
    propertyDescription:{
      type:String,
      require:true
    },
    proertyAvailability:{
      type:Date,
      require:true
    },
    ownerName:{
      type:String,
      require:true
    },
    ownerContact:{
      type:Number,
      require:true
    },
    ownerEmail:{
      type:String,
      require:true
    }
    
})

//reason for using .model is it helps us to directly interact this schema with database
// and also we want to import this schema model in different file
module.exports = mongoose.model('property',PropertySchema);