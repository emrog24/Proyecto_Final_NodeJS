const express = require('express');
const jwt = require('jsonwebtoken');
const user = express.Router();
const db = require('../config/database');


user.post('/signin', async (req, res, next) => {
    const {first_name, last_name, phone, email, address} = req.body;
    if(first_name && last_name && phone && email && address){
        let query = "INSERT INTO datos (first_name, last_name, phone, email, address, position)";
    query += `VALUES ('${first_name}', '${last_name}', '${phone}', '${email}', '${address}', 'User')`;

    const rows = await db.query(query);

    if(rows.affectedRows == 1){

        return res.status(201).json({code: 201, message: "Usuario registrado correctamente"});
        
    }
    return res.status(500).json({code: 500, message: "Ocurrió un error"});
    }
    return res.status(500).json({code: 500, message: "Campos incompletos"});
});

user.delete('/:id', async (req, res, next) => {
        const id = parseInt(req.params.id);
        const query = `DELETE FROM datos WHERE ID=${id} and position='User'`;
        const rows = await db.query(query);

        if(rows.affectedRows == 1){
            return res.status(200).json({code: 200, message: "Usuario borrado correctamente"});
        }
        return res.status(404).json({code: 404, message: "Usuario no encontrado"});
    
});

user.put('/first_name/:id', async (req, res, next) => {
    const id = parseInt(req.params.id);
    if(req.body.first_name){
        let query = `UPDATE datos SET first_name='${req.body.first_name}' WHERE ID = ${id}`;

        const rows = await db.query(query);

        if(rows.affectedRows == 1){

            return res.status(200).json({code: 200, message: "Usuario actualizado correctamente"});
        }
        return res.status(500).json({code: 500, message: "Ocurrió un error"});
    }
    return res.status(500).json({code: 500, message: "Campos incompletos"});
});

user.patch('/last_name/:id', async (req, res, next) => {
    const id = parseInt(req.params.id);
    if(req.body.last_name){
        let query = `UPDATE datos SET last_name='${req.body.last_name}' WHERE ID = ${id}`;

        const rows = await db.query(query);

        if(rows.affectedRows == 1){

            return res.status(200).json({code: 200, message: "Usuario actualizado correctamente"});
        }
        return res.status(500).json({code: 500, message: "Ocurrió un error"});
    }
    return res.status(500).json({code: 500, message: "Campos incompletos"});
});

user.patch('/phone/:id', async (req, res, next) => {
    const id = parseInt(req.params.id);
    if(req.body.phone){
        let query = `UPDATE datos SET phone='${req.body.phone}' WHERE ID = ${id}`;

        const rows = await db.query(query);

        if(rows.affectedRows == 1){

            return res.status(200).json({code: 200, message: "Usuario actualizado correctamente"});
        }
        return res.status(500).json({code: 500, message: "Ocurrió un error"});
    }
    return res.status(500).json({code: 500, message: "Campos incompletos"});
});

user.patch('/email/:id', async (req, res, next) => {
    const id = parseInt(req.params.id);
    if(req.body.email){
        let query = `UPDATE datos SET email='${req.body.email}' WHERE ID = ${id}`;

        const rows = await db.query(query);

        if(rows.affectedRows == 1){

            return res.status(200).json({code: 200, message: "Usuario actualizado correctamente"});
        }
        return res.status(500).json({code: 500, message: "Ocurrió un error"});
    }
    return res.status(500).json({code: 500, message: "Campos incompletos"});
});

user.patch('/address/:id', async (req, res, next) => {
    const id = parseInt(req.params.id);
    if(req.body.address){
        let query = `UPDATE datos SET address='${req.body.address}' WHERE ID = ${id}`;

        const rows = await db.query(query);

        if(rows.affectedRows == 1){

            return res.status(200).json({code: 200, message: "Usuario actualizado correctamente"});
        }
        return res.status(500).json({code: 500, message: "Ocurrió un error"});
    }
    return res.status(500).json({code: 500, message: "Campos incompletos"});
});

user.get('/', async (req, res, next) => {
    const user = await db.query("SELECT * FROM datos");
    
    return res.status(200).json({code: 200, message: user});
});

user.get('/:first_name', async (req, res, next) => {
    const first_name = req.params.first_name;
    const user = await db.query(`SELECT * FROM datos WHERE first_name = '${first_name}'`);
    
    if(user.length > 0){
        return res.status(200).json({code: 200, message: user});
    }
    return res.status(404).json({code: 404, message: "Usuario no encontrado"});
});


module.exports = user;