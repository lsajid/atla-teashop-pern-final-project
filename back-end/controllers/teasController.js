const express = require("express");
const teas = express.Router();
const { getAllTeas, getTea, createTea, deleteTea, updateTea } = require("../queries/teas.js")
const validateSpace = require("../validations/stringValidation.js");

teas.get("/", async (req, res) => {
    try{
        const allTeas = await getAllTeas();
        if(allTeas[0]){
            res.status(200).json(allTeas)
        }else{
            res.status(500).json({
                error: "Information cant be found in database",
            });
        }
    }catch(err){
        console.log(err)
    }
})

teas.get("/:id", async (req, res) => {
    const { id } = req.params;
    try{
        const oneTea = await getTea(id);
        if(oneTea.id){
            res.status(200).json(oneTea);
        }else{
            res.status(500).json({
                error: "Information cant be found in database",
            });
        }
    }catch(err){
        console.log(err)
    }
})

teas.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try{
        const deletedTea = await deleteTea(id);
        if(deletedTea.id){
            res.status(200).json(deletedTea);
        }else{
            res.status(404).json({ error: "Information could not be deleted" });
        }
    }catch(err){
        console.log(err);
    }
})

teas.post("/", async (req, res) => {
    const { body } = req;
    body.name = validateSpace(body);
    try{
        const createdTea = await createTea(body);
        if(createdTea.id){
            res.status(200).json(createdTea);
        }else{
            res.status(500).json({
                error: "Information could not be created to the database",
            });   
        }
    }catch(err){
        console.log(err);
    }
})

teas.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try{
        const updatedTea = await updateTea(id, body);
        if(updatedTea.id){
            res.status(200).json(updatedTea);
        }else{
            res.status(500).json({
                error: "Information could not be updated to the database",
            });     
        }
    }catch(err){
        console.log(err);
    }
})

module.exports = teas;