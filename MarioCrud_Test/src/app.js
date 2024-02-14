const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const marioModel = require('./models/marioChar');

// Middlewares
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const mariochar = mongoose.model("Mario",marioModel);

app.get("/mario",async(req,res) => {
    const data = await mariochar.find();
    res.status(200);
    res.json({
        data
    })
})
// your code goes here
app.post("/mario",async(req,res) => {
    if(req.body.name === "" || req.body.weight === ""){
        res.status(400).json({
            message: "either name or weight is missing"
        })
    } else {
        try{
            const data = await mariochar.create({
                name: req.body.name,
                weight: req.body.weight
            });
            res.status(201).json({
               marioChar: data
            })
        } catch(err){
            res.status(400).json({
                message: err.message
            })
        }
    }
})

app.get("/mario/:id",async(req,res) => {   
    try{
        const data = await mariochar.findOne({_id:req.params.id})
        res.json({
            data
        })
    }catch(err) {
        res.status(400).json({
            message: err.message
        })
    }   
})

app.patch("/mario/:id",async(req,res) => {
    try{
        await mariochar.updateOne({_id:req.params.id},req.body);
        const data = await mariochar.findOne({_id:req.params.id});
        res.json({
            data
        })
    }catch(err) {
        res.status(400).json({
            message: err.message
        })
    } 
})

app.delete("/mario/:id",async(req,res) => {
    try{
        await mariochar.deleteOne({_id:req.params.id});
        res.json({
            message:"character deleted"
        })
    }catch(err) {
        res.status(400).json({
            message: err.message
        })
    } 
})

module.exports = app;