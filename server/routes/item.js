const express = require('express');
const router = express.Router();
const { Item } = require('../models/db');


router.get('/getAll', (req, res) => {
    res.send();
})

router.get('/getOne/:id', (req, res) => {
    res.send();
});


<<<<<<< HEAD
<<<<<<< HEAD
router.post('/api/item/add', async (req, res) => {
    await Item.create(req.body).catch(err => res.send(error));
=======
router.post('/add', async (req, res) => {
    await Item.create(req.body).catch(err => res.sendStatus(500));
>>>>>>> 779167af03fd4576254420efa810499672b2acd9
=======
router.post('/add', async (req, res) => {
    await Item.create(req.body).catch(err => res.sendStatus(500));
>>>>>>> 779167af03fd4576254420efa810499672b2acd9
    res.send(true);
});



module.exports = router;