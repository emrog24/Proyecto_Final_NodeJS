const express = require('express');
const jwt = require('jsonwebtoken');
const user = express.Router();
const db = require('../config/database');


user.post('/login', async (req, res, next) => {
    const {email, password} = req.body;
    const query = `SELECT * FROM datos WHERE email='${email}' AND password='${password}' AND position='Admin'`;
    const rows = await db.query(query);
    if(email && password){
        if(rows.length == 1){
            const token = jwt.sign({
                ID: rows[0].ID,
                email: rows[0].email
            }, "debugkey");
            return res.status(200).json({code: 200, message: token});
        }
        else{
            return res.status(200).json({code: 401, message: "Usuario y/o contraseña incorrectos"});
        }
    }
    return res.status(500).json({code: 500, message: "Campos incompletos"});
    
});

module.exports = user;