const router = require('express').Router();
const { User, Post } = require('../models');
const sequelize = require('../config/connection');

// Get all posts ('/')
router.get('/', async (req, res) => {
  try {
        // Retrieve all posts from db
      const dbPostData = await Post.findAll({ 
          attributes: ['id', 'title', 'content', 'created_at'],           
          include: [
              {
                  model: User,
                  attributes: ['first_name', 'last_name'],
              },
          ],
          order: [['created_at', 'DESC']],
      });

      // Log posts after retrieval
      console.log("Posts after retrieval:", dbPostData);
      
      // Serialize data retrieved
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      console.log("Posts after serialization:", posts);
      
      // Log session object
      console.log("Session object:", req.session);

      // Respond with template to render along with data retrieved
      res.render('home', 
          { posts, 
          loggedIn: req.session.logged_in,
          firstName: req.session.firstName,
          lastName: req.session.lastName,
          userId: req.session.user_id });
  } catch (err) {
      console.error("Error during the route:", err);
      res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try{
    res.render('login');
  } catch (err){
    console.error("Error during the login route:", err);
    res.status(500).json(err)
  }
});

router.get('/signup', async (req, res) => {
  try{
    res.render('signup');
  } catch (err){
    console.error("Error during the signup route:", err);
    res.status(500).json(err)
  }
});

module.exports = router;
