const router = require('express').Router();
const apiRoutes = require('./api/index.js');

router.use('/api', apiRoutes);

router.use((req, res) => res.send('Incorrect Route! Try again...'));

module.exports = router;
