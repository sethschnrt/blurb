const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
const signUpRoutes = require('./signUpRoutes');
const logOutRoutes = require('./logoutRoutes');
const postRoutes = require('./postRoutes');

router.use('/signup', signUpRoutes);
router.use('/login', loginRoutes);
router.use('/logout', logOutRoutes);
router.use('/post', postRoutes);


module.exports = router;