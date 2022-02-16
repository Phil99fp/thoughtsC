window.addEventListener("hashchange", updateContent);

function loadPost(data) {
  const wrapper = document.createElement("div");
  const title = document.createElement("h1");
  const username = document.createElement("p");
  const body = document.createElement("p");
  const image = document.createElement("img");
  const link = document.createElement("a");

  title.textContent = data.title;
  username.textContent = data.username;
  body.textContent = data.body;
  if (data.resources) {
    if (data.resources.image) {
      image.src = data.resources.image;
    } else if (data.resources.link) {
      link.src = data.resources.link;
    }
  }

  wrapper.appendChild(title);
  wrapper.appendChild(username);
  wrapper.appendChild(body);
  wrapper.appendChild(image);
  wrapper.appendChild(link);
  return wrapper;
}

function updateContent() {
  let hash = window.location.hash.substring(1);
  updateMain(hash);
}

async function updateMain(hash) {
  body.innerHTML = "";
  let id = hash.split("/")[1];
  const data = await getItem(id);
  const wrapper = loadPost(data);
  body.append(wrapper);
}
const body = document.querySelector("section");
const submitButton = document.querySelector("#post");
if (window.location.hash) {
  console.log("nice");
  updateContent();
}
submitButton.addEventListener("submit", postPost);
