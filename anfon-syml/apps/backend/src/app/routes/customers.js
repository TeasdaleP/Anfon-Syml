const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send('Get Customers');
});

router.put('/', (req, res) => {
    return res.status(418).send('Error : You wont be able to update anything here!');
});

router.post('/', (req, res) => {
    return res.send('Post Customers');
});

router.delete('/', (req, res) => {
    return res.status(418).send('Error : You wont be able to delete anything here!');
});

module.exports = router;
