const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api/index');

router.use('/api', apiRoutes)
router.use('/', homeRoutes);

module.exports = router;