import { useEffect, useState } from "react"
import { getCategories } from "../../managers/CategoriesManager"


export const CategoryList = () => {
    const [categories, setCategories] = useState([])

    useEffect(
        () => {
            getCategories().then(setCategories)
        }, []
    )
    return (
        <>
            <h1>Categories</h1>
            {categories.map(category => {
                return <div>{category.label}</div>
            })}
        </>
    )
}