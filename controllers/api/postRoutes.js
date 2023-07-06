const router = require('express').Router();
const { User, Post } = require('../../models');
const withAuth = require('../../utils/auth');

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



module.exports = router;