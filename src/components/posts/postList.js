import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
//import { DeleteButton } from "./DeleteButton"


export const PostList = () => {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
    const [filteredPosts, setFiltered] = useState([])


    const getPosts = () => {
        fetch(`http://localhost:8088/posts`)
        .then(response => response.json())
        .then((postArray) => {
            setPosts(postArray)
                        })

    }
    useEffect(
        () => {
            getPosts()
        },
        [] // When this array is empty, you are observing initial component state
    )


    return <>

    <h2>Your Posts</h2>

    

    <article className="posts">
        {
            posts.map(
                (post) => {
                    return <section className="post" key={`post--${post.id}`}>
                        {/* <Link to={`/posts/${post.id}/edit`}> {post.label}</Link> */}
                        <div>{post.title}</div>
                        <img src={post.image_url} alt={post.title}></img>
                        <footer>
                        {/* <DeleteButton post={post} get={getPosts}/>  */}
                    </footer>
                    </section>
                }
            )
        }


    </article>
    </>
}
