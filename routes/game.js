const express = require('express');
const router = express.Router();
const axios = require('axios');

router.use(express.json());

router.get('/questions', async (req, res) => {
    try {
        const response = await axios.get(`https://opentdb.com/api.php?amount=10&category=${req.query.topic}&difficulty=${req.query.difficulty}&type=multiple`);
        res.send(response.data.results);
    } catch (error) {
        console.log(error.message);
        res.json({ message: 'Error occured' });
    }
});

router.get('/topics', async (req, res) => {
    try {
        const response = await axios.get('https://opentdb.com/api_category.php');
        categories = response.data.trivia_categories;
        categories = categories.filter(category => { return validCategories(category.id) });

        res.send(categories);
    } catch (err) {
        console.log(err.message);
        res.json({ message: 'Error occured' });
    }
});

const validCategories = (id) => {
    // These categorires don't fetch questions
    if (id === 24 || id === 25 || id === 13 || id === 19 || id === 30) return false;
    return true;
}

module.exports = router;