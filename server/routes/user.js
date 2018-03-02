const express = require('express');
const router = express.Router();
const { User } = require('../models/db');

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            res.send({ error: 'no user found!' });
        }

        if (password !== user.password) {
            res.send({ error: 'password is worng' });
        }

    } catch (error) {
        res.sendStatus(500)
    } 

    res.send({ error: '' });
})

router.post('/register', async (req, res) => {
    try {
        await User.create(req.body).catch(err => res.send(error));
    } catch (error) {
        res.sendStatus(500);    
    }

    res.send({ error: '' });
});

module.exports = router;