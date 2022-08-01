/* As a reader, I would like to see the content of a Post so I can read it.

Given a user is viewing a list of Posts
When they select a post to read
Then they should be directed to a Post Detail page that shows the Post Details.

Post Details include:

Title  (post.title)
Header image (if exists) (post.image_url)
Content (post.content)
Publication date (MM/DD/YYYY) (post.publication_date)
Author's Display Name (post.user_first_name post.user_last_name) */ 

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSinglePost } from "../../managers/PostManager"

/* 
In MyPosts + PostList, add button next to all posts called "Details"
On click, navigate to PostDetails

*/
export const PostDetails = () => {
    const { postId } = useParams()
    const [post, setPost] = useState({})

    const dateConverter = (dateString) => {
        const d = new Date(dateString)

        const month = d.getMonth() + 1
        const date = d.getDate()
        const year = d.getFullYear()

        return <>{month}/{date}/{year}</>
    }

    useEffect(
        () => {
            getSinglePost(postId).then(setPost)
        }, []
    )

    return (
        <>
            <div className="content">
            <div>
                <h1>{post.title}</h1>
            </div>
            <figure className="image">
                <img src={post.image_url} alt={`${post.title}`} />
            </figure>
            <div>
                <p>by {post?.user?.first_name} {post?.user?.last_name}</p>
                <p>posted on {dateConverter(post.publication_date)}</p>
            </div>
            <div>
                {post.content}
            </div>

            </div>
        </>
    
    )
    /* 
    pass post id as prop from posts
    import single post from database using post id prop
    save post to state
    return details of individual post */    
}