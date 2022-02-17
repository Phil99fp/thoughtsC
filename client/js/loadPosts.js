window.addEventListener("hashchange", updateContent);

function loadPost(data) {
  const wrapper = document.createElement("div");
  const title = document.createElement("h1");
  const username = document.createElement("p");
  const body = document.createElement("p");
  const image = document.createElement("img");
  const link = document.createElement("a");
  const button = document.createElement("button");
  button.type = "button";
  button.innerText = "share";
  button.addEventListener("click", () => {
    //copy url to clipboard
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard");
  });

  title.textContent = data.title;
  username.textContent = `by ${data.username}`;
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
  wrapper.appendChild(button);
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
const header = document.querySelector("#header");
header.addEventListener("click", () => {
  window.location.hash = "";
  location.reload();
});
submitButton.addEventListener("submit", postPost);
