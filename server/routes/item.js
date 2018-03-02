const express = require('express');
const router = express.Router();
const { Item } = require('../models/db');


router.get('/getAll', (req, res) => {
    res.send();
})

router.get('/getOne/:id', (req, res) => {
    res.send();
});


router.post('/add', async (req, res) => {
    await Item.create(req.body).catch(err => res.sendStatus(500));
    res.send(true);
});



module.exports = router;