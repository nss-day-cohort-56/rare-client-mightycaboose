import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getSinglePostById } from "../../managers/postManager"

// function to edit a post
export const PostEdit = (categories) => {
    const [post, editPost] = useState({
        category_id: 0,
        title: "",
        content: "",
    })
    const navigate = useNavigate()
    // useparams to access the postId?
    // get current user
    const { postId } = useParams()

    useEffect(
        () => {
            getSinglePostById(postId)
                .then(editPost)
        },
        [postId] // When this array is empty, you are observing initial component state
    )


    // handlesavebuttonclick event
    // it's a PUT to the database
    // it redirects to the new post's details page
    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/posts/${postId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
            .then(response => response.json())
            .then(() => {
                navigate(`/my_posts/:postId`)
            })
    }

    


    // and a cancel button too
    // this redirects back to the post list

    // JSX for the edit form:
    return (
        <article className="panel is-info">
            <h2 className="panel-heading">Update Post</h2>
            <div className="panel-block">
                <form style={{ width: "100%" }}>
                    <div className="field">
                        <label htmlFor="concept" className="label">Title: </label>
                        <div className="control">
                            <input type="text" name="concept" required autoFocus className="input"
                                proptype="varchar"
                                placeholder="Title"
                                value={post.title}
                                onChange={
                                    (evt) => {
                                        const copy = {...post}
                                        copy.title = evt.target.checked
                                        editPost(copy) 
                                    }
                                }
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="entry" className="label">Article Content: </label>
                        <div className="control">
                            <textarea
                                className="textarea"
                                name="post"
                                value={post.content}
                                onChange={
                                    (evt) => {
                                        const copy = {...post}
                                        copy.content = evt.target.checked
                                        editPost(copy) 
                                    }
                                }
                            ></textarea>
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="categoryId" className="label">Category: </label>
                        <div className="control">
                            <div className="select">
                                <select name="categoryId"
                                    proptype="int"
                                    value={post.categoryId}
                                    onChange={
                                        (evt) => {
                                            const copy = {...post}
                                            copy.categoryId = evt.target.checked
                                            editPost(copy) 
                                        }
                                    }>
                                    <option value="0">Select a category</option>
                                    {categories.map(m => (
                                        <option key={m.id} value={m.id}>
                                            {m.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button type="submit"
                                onClick={evt => {
                                    evt.preventDefault()
                                    handleSaveButtonClick()
                                }}
                                className="button is-link">
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </article>
    )
}