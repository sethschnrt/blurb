const router = require('express').Router();
const { User } = require('../models');



router.get('/', async (req, res) => {
try{
    res.render('layouts/home');
  } catch (err) {
    res.status(500).json(err);
  }}
);

router.get('/login', async (req, res) => {
  try{
  res.render('layouts/login');
  } catch (err){
    res.status(500).json(err)
  }
});

router.get('/signup', async (req, res) => {
  try{
  res.render('layouts/signup');
  } catch (err){
    res.status(500).json(err)
  }
});

module.exports = router;