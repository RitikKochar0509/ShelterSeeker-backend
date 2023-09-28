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
        type: req.body.type,
        name: req.body.name,
        description: req.body.description,
        surfaceArea: req.body.surfaceArea,
        phone: req.body.phone,
        building: req.body.building,
        level: req.body.level,
        location: req.body.location,
        price: req.body.price,
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
    if(req.body.type!=null){
        res.property.type = req.body.type;
    }
    if(req.body.name!=null){
        res.property.name = req.body.name;
    }
    if(req.body.description!=null){
        res.property.description = req.body.description;
    }
    if(req.body.surfaceArea!=null){
        res.property.surfaceArea = req.body.surfaceArea;
    }
    if(req.body.phone!=null){
        res.property.phone = req.body.phone;
    }
    if(req.body.building!=null){
        res.property.building = req.body.building;
    }
    if(req.body.level!=null){
        res.property.level = req.body.level;
    }
    if(req.body.location!=null){
        res.property.location = req.body.location;
    }
    if(req.body.price!=null){
        res.property.price = req.body.price;
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