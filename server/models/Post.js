const { init } = require("../dbConfig");
const { ObjectId } = require("mongodb");

class Post {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.username = data.username;
    this.body = data.body;
    this.resources = data.resources;
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        const postData = await db.collection("posts").find().toArray();
        const posts = postData.map(
          (p) =>
            new Post({
              ...p,
              id: p._id,
              title: p.title,
              username: p.username,
              body: p.body,
              resources: p.resources
            })
        );
        resolve(posts);
      } catch (err) {
        reject("Error retrieving post");
      }
    });
  }

  static findById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        let postData = await db
          .collection("posts")
          .find({ _id: ObjectId(id) })
          .toArray();
        let post = new Post({ ...postData[0], id: postData[0]._id });
        resolve(post);
      } catch (err) {
        reject("Post not found");
      }
    });
  }

  static create(title, username, body, resources) {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        let postData = await db.collection("posts").insertOne({
          title: title,
          username: username,
          body: body,
          resources: resources
        });
        let newPostId = new Post(postData.insertedId);
        let newPost = this.findById(newPostId);
        resolve(newPost);
      } catch (err) {
        reject("Error creating post");
      }
    });
  }
}

module.exports = Post;
