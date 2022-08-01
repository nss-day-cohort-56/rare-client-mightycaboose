export const getSinglePost = (id) => {
    return fetch(`http://localhost:8088/posts/${id}`)
      .then(res => res.json())
  };
  
export  const getPosts = () => {
    fetch(`http://localhost:8088/posts`)
    .then(response => response.json())
    .then((postArray) => {
        setPosts(postArray)
                    })}

export  const getMyPosts = (id) => {
    fetch(`http://localhost:8088/posts?q=${id}`)
    .then(response => response.json())
    .then((postArray) => {
        setPosts(postArray)
                    })}
