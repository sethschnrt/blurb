const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
const signUpRoutes = require('./signUpRoutes');
const logOutRoutes = require('./logoutRoutes')


router.use('/signup', signUpRoutes);
router.use('/login', loginRoutes);
router.use('/logout', logOutRoutes);


module.exports = router;