const db = connect("mongodb://localhost:27017/pages");

db.posts.drop();

db.posts.insertOne({
  title: "title",
  username: "username",
  body: "body",
  resources: {
    image: "",
    link: ""
  }
});
