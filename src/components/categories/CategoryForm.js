import React, { useState} from "react"
import { useNavigate } from "react-router-dom"
import { addCategory } from "../../managers/CategoriesManager"

//Defining a function to create form for new category
export const CategoryForm = () => {
    const [updatedCategory, setUpdatedCategories] = useState({
        label: ""})
    const navigate = useNavigate()

//Updates state when user types input
    const handleUpdateCategory = (event) => {
        const copy = {...updatedCategory} 
        copy.label = event.target.value 
        setUpdatedCategories(copy)
    }

//Button posts new object to category in database then navigates to category list
return <>
    <input type="text" name="category" required value={updatedCategory.label} onChange={handleUpdateCategory} />
    <button className="submitNewCategoryB" type="submit"
        onClick={() => {addCategory(updatedCategory).then(navigate("/categories"))}}>Save</button>
</>
}





