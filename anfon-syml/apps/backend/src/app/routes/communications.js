const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send('Get Communications');
});

router.put('/', (req, res) => {
    return res.send('Put Communications');
});

router.post('/', (req, res) => {
    return res.send('Post Communications');

});

router.delete('/', (req, res) => {
    return res.send('Delete Communications');
    res.status(418).send('Error : We only send Communications, not remove them!');
});

module.exports = router;
