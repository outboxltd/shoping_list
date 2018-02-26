const express = require('express');
const router = express.Router();
const { User } = require('../models/db');

router.post('/login',  (req, res) => {
    res.send(true);
})

router.post('/register', async (req, res) => {
    await User.create(req.body).catch(err => res.send(error));
    res.send(true);
});

module.exports = router;