const express = require('express');
const router = express.Router();
const axios = require('axios');

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

router.get('/items', async (req, res) => {
    try {
        const response = await axios.get(API_URL);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from API' });
    }
});

module.exports = router;
