import React, { useState} from "react"
import { useNavigate } from "react-router-dom"
import { addTag } from "../../managers/TagManager"

//Defining a function to create form for new tag
export const TagForm = () => {
    const [updatedTag, setUpdatedTag] = useState({
        label: ""})
    const navigate = useNavigate()

//Updates state when user types input
    const handleUpdateTag = (event) => {
        const copy = {...updatedTag} 
        copy.label = event.target.value 
        setUpdatedTag(copy)
    }

//Button posts new object to tags in database then navigates to tag list
return <>
    <input type="text" name="tag" required value={updatedTag.label} onChange={handleUpdateTag} />
    <button className="submitNewTag" type="submit"
        onClick={() => {addTag(updatedTag).then(() => navigate("/tags"))}}>Save</button>
</>
}