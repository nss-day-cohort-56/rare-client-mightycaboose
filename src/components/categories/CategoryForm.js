import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { addCategory } from "../../managers/CategoriesManager"

export const CategoryForm = () => {
    const [updatedCategory, setUpdatedCategories] = useState({
        label: ""})
    const navigate = useNavigate()


    const handleUpdateCategory = (event) => {
        const copy = {...updatedCategory} 
        copy.label = event.target.value 
        setUpdatedCategories(copy)
    }


const constructNewCategory = () => {
    // const copyCategory = { ...category }
    // copyCategory.label = parseInt(copyCategory.label)
    // if (!copyCategory.label) {
    //     copyCategory.label = Date(Date.now()).toLocaleString('en-us').split('GMT')[0]
    // }
    // onFormSubmit(copyCategory)
}

return <>
    <input type="text" name="category" required value={updatedCategory.label} onChange={handleUpdateCategory} />
    <button className="submitNewCategoryB" type="submit"
        onClick={() => {addCategory(updatedCategory).then(navigate("/categories"))}}>Save</button>
</>
}


/*
-Create input form
-When text entered into input form > text should be saved to state and value of input updated
    -OnChange - make copy of current state
    -Update value of copy with value from input (event)
    -Save copy to state
    -Value of input should = state

-Create save button
-When save button is clicked > value in state to be sent to database
*/




