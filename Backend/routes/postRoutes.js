const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createPost } = require('../controllers/postController');

router.post('/', auth, createPost);

module.exports = router;
