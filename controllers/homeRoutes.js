const router = require('express').Router();
const { User } = require('../models');



router.get('/', async (req, res) => {
try{
    res.render('home');
  } catch (err) {
    res.status(500).json(err);
  }}
);

const redirectToDashboard = (req, res, next) => {
  if (req.session.logged_in) {
    res.redirect('/');
  } else {
    next();
  }
};

router.get('/login', redirectToDashboard, async (req, res) => {
  res.render('login');
});


router.get('/signup', async (req, res) => {
  try{
  res.render('signup');
  } catch (err){
    res.status(500).json(err)
  }
});

module.exports = router;