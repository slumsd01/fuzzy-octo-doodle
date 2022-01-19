const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const petRoutes = require('./pet-routes');
const imageRoutes = require('./image-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/pets', petRoutes);
router.use('/images', imageRoutes);

module.exports = router;
