async function getItem(id) {
  try {
    const resp = await fetch(`http://localhsot:3000/posts/${id}`);
    const data = await resp.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
}

async function postPost(e) {
  e.preventDefault();
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
    };

    const resp = await fetch("http://localhost:3000/posts", options);
    const { id, err } = await resp.json();
    if (err) {
      throw Error(err);
    } else {
      window.location.hash = `#posts/${id}`;
    }
  } catch (err) {
    console.warn(err);
  }
}
