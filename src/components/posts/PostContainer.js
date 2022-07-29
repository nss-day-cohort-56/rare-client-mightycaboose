import { useState } from "react"
import { PostDetails } from "./PostDetails"
import { PostList } from "./postList"

export const PostContainer = () => {
    const [postId, setPostId] = useState(0)
    return (
        <>
            <PostList setPostId={setPostId}/>
            <PostDetails id={postId}/>
        </>
    )
}