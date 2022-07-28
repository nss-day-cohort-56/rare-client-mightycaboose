import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getCategories } from "../../managers/CategoriesManager"


export const CategoryList = () => {
    const navigate = useNavigate()

    const [categories, setCategories] = useState([])

    useEffect(
        () => {
            getCategories().then(setCategories)
        }, []
    )
    return (
        <>
            <h1>Categories</h1>
            <button onClick={() => {navigate("/categories/new")}}>Create New Category</button>
            {categories.map(category => {
                return <div>{category.label}</div>
            })}
        </>
    )
}