const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
const signUpRoutes = require('./signUpRoutes');


router.use('/signup', signUpRoutes);
router.use('/login', loginRoutes);


module.exports = router;