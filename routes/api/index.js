const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// creating userRoutes 
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
// exporting router//
module.exports = router;