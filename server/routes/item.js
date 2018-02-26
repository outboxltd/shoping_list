const express = require('express');
const router = express.Router();

router.get('/getAll', (req, res) => {
    res.send();
})

router.get('/getOne/:id', (req, res) => {
    res.send();
});


router.post('/items', async (req, res) => {
    await item.create(req.body).catch(err => res.send(error));
    res.send(true);
});



module.exports = router;