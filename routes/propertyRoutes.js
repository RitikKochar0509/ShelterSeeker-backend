const express = require('express');
const router = express.Router();
const Properties = require('../models/properties')


//Getting all
router.get('/list-properties',async (req,res)=>{
    
    try{
        const propertiesList = await Properties.find();
        res.json(propertiesList);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
})

//Getting one
router.get('/property/:id', getProperty, (req,res)=>{

   res.send(res.property);

})

//Creating one
router.post('/property',async (req,res)=>{
    const properyData = new Properties({
        image: req.body.image,
        propertyName: req.body.propertyName,
        propertyRent: req.body.propertyRent,
        propertyLocation: req.body.propertyLocation,
        propertyDescription: req.body.propertyDescription,
        proertyAvailability: req.body.proertyAvailability,
        ownerName: req.body.ownerName,
        ownerContact: req.body.ownerContact,
        ownerEmail: req.body.ownerEmail,
    })

    try{
        const newProperty = await properyData.save();
        res.status(201).json(newProperty);
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
})

//updating one
router.patch('/property/:id',getProperty,async(req,res)=>{
    if(req.body.image!=null){
        res.property.image = req.body.image;
    }
    if(req.body.propertyName!=null){
        res.property.propertyName = req.body.propertyName;
    }
    if(req.body.propertyRent!=null){
        res.property.propertyRent = req.body.propertyRent;
    }
    if(req.body.propertyLocation!=null){
        res.property.propertyLocation = req.body.propertyLocation;
    }
    if(req.body.propertyDescription!=null){
        res.property.propertyDescription = req.body.propertyDescription;
    }
    if(req.body.proertyAvailability!=null){
        res.property.proertyAvailability = req.body.proertyAvailability;
    }
    if(req.body.ownerName!=null){
        res.property.ownerName = req.body.ownerName;
    }
    if(req.body.ownerContact!=null){
        res.property.ownerContact = req.body.ownerContact;
    }
    if(req.body.ownerEmail!=null){
        res.property.ownerEmail = req.body.ownerEmail;
    }
    try{
        const updatedProperty = await res.property.save();
        res.json(updatedProperty);
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
})

//Deleting one
router.delete('/property/:id',getProperty,async (req,res)=>{
    try{
        await res.property.deleteOne();
        res.json({message:"Deleted Property"})
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})


async function getProperty(req,res,next){
    let property;
    try{
        property = await Properties.findById(req.params.id);
        if(property == null){
           return res.status(400).json({message:"Cannot find property for that particular id"});
        }
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
    res.property = property;
    next();
}

module.exports = router