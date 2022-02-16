const body = document.querySelector(body);

function loadPost(id) {
  const wrapper = document.createElement("div");
  const title = document.createElement("h2");
  const username = document.createElement("p");
  const body = document.createElement("p");
  const image = document.createElement("img");
  const link = document.createElement("a");

  const post = getItem(id);

  title.textContent = post.title;
  username.textContent = post.username;
  body.textContent = post.textContent;
  image.src = post.resources.image;
  link.src = post.resources.link;

  wrapper.appendChild(title);
  wrapper.appendChild(username);
  wrapper.appendChild(body);
  wrapper.appendChild(image);
  wrapper.appendChild(link);
}
