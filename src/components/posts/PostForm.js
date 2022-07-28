import React, { useState, useEffect } from "react"

// need params for this function!!
export const PostForm = ({ post, categories, onFormSubmit }) => {
    const [editMode, setEditMode] = useState(false)
    const [updatedPost, setUpdatedPost] = useState(entry)

    useEffect(() => {
        setUpdatedPost(post)
        if ('id' in post) {
            setEditMode(true)
        }
        else {
            setEditMode(false)
        }
    }, [post])

    const handleControlledInputChange = (event) => {

        const newPost = { ...updatedPost }
        newPost[event.target.name] = event.target.value
        setUpdatedPost(newPost)
    }

    const constructNewPost = () => {
        const copyPost = { ...updatedPost }
        copyPost.categoryId = parseInt(copyPost.moodId)
        if(!copyPost.date) {
            copyPost.date = Date(Date.now()).toLocaleString('en-us').split('GMT')[0]
        }
        onFormSubmit(copyPost)
    }

    return (
        <article className="panel is-info">
            <h2 className="panel-heading">{editMode ? "Update Post" : "Create Post"}</h2>
            <div className="panel-block">
                <form style={{ width: "100%" }}>
                    <div className="field">
                        <label htmlFor="concept" className="label">Title: </label>
                        <div className="control">
                            <input type="text" name="concept" required autoFocus className="input"
                                proptype="varchar"
                                placeholder="Title"
                                value={updatedPost.title}
                                onChange={handleControlledInputChange}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="entry" className="label">Article Content: </label>
                        <div className="control">
                            <textarea
                                className="textarea"
                                name="post"
                                value={updatedPost.post}
                                onChange={handleControlledInputChange}
                            ></textarea>
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="categoryId" className="label">Category: </label>
                        <div className="control">
                            <div className="select">
                                <select name="categoryId"
                                    proptype="int"
                                    value={updatedPost.categoryId}
                                    onChange={handleControlledInputChange}>
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
                                    constructNewPost()
                                }}
                                className="button is-link">
                                {editMode ? "Update" : "Save"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </article>
    )
}

