const router = require('express').Router();
const { User, Post } = require('../models');
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');

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
      })
      // Serialize data retrieved
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      console.log(posts)
      // Respond with template to render along with date retrieved
      res.render('home', 
          { posts, 
          loggedIn: req.session.logged_in,
          firstName: req.session.firstName,
          lastName: req.session.lastName,
          userId: req.session.user_id });
  } catch (err) {
    res.status(500).json(err);
  }}
);

router.get('/post', withAuth, (req, res) => {
  Post.findAll({
    where: {
      userId: req.session.user_id,
    },
    attributes: ['id', 'title', 'content', 'created_at'],
    order: [['created_at', 'DESC']],
    include: [
      {
        model: User,
        attributes: ['first_name', 'last_name'],
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render('post', { posts, logged_in: true, first_name: req.session.first_name, last_name: req.session.last_name});       
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
  });
});

const redirectToDashboard = (req, res, next) => {
  if (req.session.logged_in) {
    res.redirect('/');
  } else {
    next();
  }
};

router.get('/login', async (req, res) => {
  try{
  res.render('login');
  } catch (err){
    res.status(500).json(err)
  }
});


router.get('/signup', async (req, res) => {
  try{
  res.render('signup');
  } catch (err){
    res.status(500).json(err)
   
  }
});

router.get('/new-post', withAuth, (req, res) => {
  res.render('new-post', { first_name: req.session.first_name, last_name: req.session.last_name});
});

module.exports = router;