import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getTags } from "../../managers/TagManager"

/* Returns a list of tags, create a "new tag" button */
export const TagList = () => {
    const navigate = useNavigate()

    const [tags, setTags] = useState([])

    useEffect(
        () => {
            getTags().then(setTags)
        }, []
    )
    return (
        <>
            <h1>Tags</h1>
            <button onClick={() => {navigate("/tags/new")}}>Create New Tag</button>
            {tags.map(tag => {
                return <div>{tag.label}</div>
            })}
        </>
    )
}