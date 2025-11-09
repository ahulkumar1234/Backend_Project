const express = require('express');
const router = express.Router();

// http://localhost:3000/api/v1/users/

router.get('/', (req, res) => {
    res.send(`All users found`);
});

router.get('/:id', (req, res) => {
    res.send(`one users found ${req.params.id}`);
})

router.post('/', (req, res) => {
   
});

router.patch('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;

