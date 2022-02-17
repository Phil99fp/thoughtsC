async function getItem(id) {
  try {
    const resp = await fetch(`http://localhost:3000/posts/${id}`);
    const data = await resp.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
}

async function postPost(e) {
  e.preventDefault();
  try {
    const formDataObject = Object.fromEntries(new FormData(e.target));
    if (formDataObject.hasOwnProperty("image")) {
      formDataObject.resources = {};
      formDataObject.resources.image = formDataObject.image;
      delete formDataObject.image;
    }
    const formData = JSON.stringify(formDataObject);

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: formData
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
