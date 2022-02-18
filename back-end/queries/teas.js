const db = require("../db/dbConfig.js");
//getAllTeas, getTea, createTea, deleteTea, updateTea
const getAllTeas = async () => {
    try{
        const allTeas = await db.any('SELECT * FROM teas');
        return allTeas;
    }catch(err){
        return err
    }
}

const getTea = async (id) => {
    try{
        const oneTea = await db.one('SELECT * FROM teas WHERE id=$1', id);
        return oneTea;
    }catch(err){
        return err;
    }
}

const createTea = async (tea) => {
    try{
        const newTea = await db.one(
            'INSERT INTO teas (name, image, description, price, is_popular) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [
                tea.name,
                tea.image,
                tea.description,
                tea.price,
                tea.is_popular
            ]
        );
        return newTea;
    }catch(err){
        return err;
    }
}

const deleteTea = async (id) => {
    try{
        const deletedTea = await db.one(
            'DELETE FROM teas WHERE id=$1 RETURNING *',
            id
        );
        return deletedTea;
    }catch(err){
        return err;
    }
}

const updateTea = async (id, tea) => {
    try{
        const updatedTea = await db.one(
            'UPDATE teas SET name=$1, image=$2, description=$3, price=$4, is_popular=$5 WHERE id=$6 RETURNING *',
            [
                tea.name,
                tea.image,
                tea.description,
                tea.price,
                tea.is_popular,
                id
            ]
        );
        return updatedTea;
    }catch(err){
        return err;
    }
}

module.exports = {
    getAllTeas,
    getTea,
    createTea,
    deleteTea,
    updateTea
}