/* Retrieve all tags, convert it to json. Then add individual tag, with post request, convert it to json */

export const getTags = () => {
    return fetch("http://localhost:8088/tags")
      .then(res => res.json())
  };

  export const addTag = (tag) => {
    return fetch("http://localhost:8088/tags", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(tag)
    }).then(res => res.json())
  }

  export const deleteTag = (id) => {
    return fetch(`http://localhost:8088/tags/${id}`, {
        method: "DELETE"
    })
  }