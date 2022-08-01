import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

//import { DeleteButton } from "./DeleteButton"


export const MyPosts = ({token}) => {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
    const [filteredPosts, setFilteredPosts] = useState([])


    const getPosts = () => {
        fetch(`http://localhost:8088/posts?q=${token}`)
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

    // useEffect(
    //     () => {
    //         const myPosts = post.filter(post => post.user_id === parseInt(token))
    //             setFilteredPosts(myPosts)
    //     },
    //     [posts] // When this array is empty, you are observing initial component state
    // )


    return <>

    <h2>My Posts</h2>

    

    <article className="posts">
        {
            posts.map(
                (post) => {
                    return <section className="post" key={`post--${post.id}`}>
                        {/* <Link to={`/posts/${post.id}/edit`}> {post.label}</Link> */}
                        <div>{post.title}</div>
                        <div>{post.publication_date}</div>
                        <div>{post.category.label}</div>
                        <div>{post.user?.first_name}</div>
                        <div>{post.user?.last_name}</div>
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
