import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getTags, deleteTag } from "../../managers/TagManager"

/* Returns a list of tags, create a "new tag" button */
export const TagList = () => {
    const navigate = useNavigate()

    const [tags, setTags] = useState([])
    const [deleteActive, setDeleteActive] = useState(false);
    const [tagId, setTagId] = useState(0);

    const handleDeleteClick = (id) => {
        setDeleteActive(true)
        setTagId(id)
    }

    useEffect(
        () => {
            getTags().then(setTags)
        }, []
    )

    useEffect(
        () => {
            getTags().then(setTags)
        }, [deleteActive]
    )


    return (
        <>
            <h1>Tags</h1>
            <button onClick={() => { navigate("/tags/new") }}>Create New Tag</button>
            {tags.map(tag => {
                return <div>
                    <button onClick={() => { handleDeleteClick(tag.id) }}>Delete</button>
                    {tag.label}</div>
            })}
            <div className={deleteActive ? "modal is-active" : "modal"}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Delete Tag?</p>
                    </header>
                    <section className="modal-card-body">
                        Are you sure you want to delete this tag?
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success" onClick={() => {
                            deleteTag(tagId).then(() => {
                                setDeleteActive(false)
                                setTagId(0)
                            })
                        }}>Delete</button>
                        <button className="button" onClick={() => { setDeleteActive(false) }}>Cancel</button>
                    </footer>
                </div>
            </div>

        </>
    )
}