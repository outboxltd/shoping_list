const express = require('express');
const router = express.Router();

router.get('/getAll', (req, res) => {
    res.send();
})

router.get('/getOne/:id', (req, res) => {
    res.send();
});

module.exports = router;