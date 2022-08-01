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