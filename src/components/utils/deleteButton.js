import { useNavigate } from "react-router-dom"

export const DeleteButton = ({post, get }) => {
    const navigate = useNavigate()

    return <button onClick={() => {
        fetch(`http://localhost:8088/posts/${post.id}`, {
            method: "DELETE"
        })
        .then(() => {
            get()
        })
    }} className="post__delete">Delete</button>
}