const router = require('express').Router();
const { User, Post } = require('../../models');
const withAuth = require('../../utils/auth');
const axios = require('axios'); // add this line

// create a new post ('/api/post')
router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({ ...req.body, userId: req.session.userId });
        console.log("This is the new post", newPost);
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

//  route for searching gifs
router.get('/search_gifs', async (req, res) => {
    try {
        const searchTerm = req.query.q;
        const apiKey = process.env.GIPHY_API_KEY; // Access the API key from the environment variables

        const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}`);

        res.json(response.data.data);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});

module.exports = router;

