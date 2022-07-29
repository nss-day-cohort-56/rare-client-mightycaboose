/* As a reader, I would like to see the content of a Post so I can read it.

Given a user is viewing a list of Posts
When they select a post to read
Then they should be directed to a Post Detail page that shows the Post Details.

Post Details include:

Title
Header image (if exists)
Content
Publication date (MM/DD/YYYY)
Author's Display Name */

import { useParams } from "react-router-dom"
import { getSinglePost } from "../../managers/PostManager"

/* 
In MyPosts + PostList, add button next to all posts called "Details"
On click, navigate to PostDetails

*/
export const PostDetails = ({id}) => {
    const { postId } = useParams()

    
    return <>post details</>
    /* 
    pass post id as prop from posts
    import single post from database using post id prop
    save post to state
    return details of individual post */    
}