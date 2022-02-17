const Post = require("../models/Post");

async function index(req, res) {
  try {
    const posts = await Post.all;
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function show(req, res) {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ error });
  }
}

async function create(req, res) {
  try {
    const post = await Post.create(
      req.body.title,
      req.body.username,
      req.body.body,
      req.body.resources
    );
    res.status(201).json(post);
  } catch (error) {
    res.status(422).json({ error });
  }
}

module.exports = { index, show, create };
