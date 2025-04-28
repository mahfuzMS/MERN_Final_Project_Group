const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  const { title, content, image } = req.body;
  const post = new Post({
    title,
    content,
    image,
    author: req.user.userId
  });

  await post.save();
  res.status(201).json(post);
};
