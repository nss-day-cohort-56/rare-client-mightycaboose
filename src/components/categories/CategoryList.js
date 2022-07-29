import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getCategories, deleteCategory, updateCategory } from "../../managers/CategoriesManager"


export const CategoryList = () => {
    const navigate = useNavigate()

    const [categories, setCategories] = useState([])
    const [editActive, setEditActive] = useState(false);
    const [deleteActive, setDeleteActive] = useState(false);
    const [categoryId, setCategoryId] = useState(0);
    const [updatedCategory, setUpdatedCategories] = useState({
        label: ""})

    const handleDeleteClick = (id) => {
        setDeleteActive(true)
        setCategoryId(id)
    }

    const handleEditClick = (id) => {
        setEditActive(true)
        setCategoryId(id)
    }

    //Updates state when user types input
    const handleUpdateCategory = (event) => {
        const copy = {...updatedCategory} 
        copy.label = event.target.value 
        setUpdatedCategories(copy)
    }

    useEffect(
        () => {
            getCategories().then(setCategories)
        }, []
    )
    
    useEffect(
        () => {
            getCategories().then(setCategories)
        }, [editActive, deleteActive]
    )
    
    return (
        <>
            <h1>Categories</h1>
            <button onClick={() => { navigate("/categories/new") }}>Create New Category</button>
            {categories.map(category => {
                return <>
                    <div>
                        <button onClick={() => { handleEditClick(category.id) }}>Edit</button>
                        <button onClick={() => { handleDeleteClick(category.id) }}>Delete</button>
                        {category.label}</div>
                </>
            })}
            <div className={deleteActive ? "modal is-active" : "modal"}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Delete Category?</p>
                    </header>
                    <section className="modal-card-body">
                        Are you sure you want to delete this category?
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success" onClick={() => {
                            deleteCategory(categoryId).then(() => {
                                setDeleteActive(false)
                                setCategoryId(0)
                            })
                        }}>Delete</button>
                        <button className="button" onClick={() => { setDeleteActive(false) }}>Cancel</button>
                    </footer>
                </div>
            </div>

            <div className={editActive ? "modal is-active" : "modal"}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Edit Category</p>
                    </header>
                    <input type="text" name="category" required value={updatedCategory.label} onChange={handleUpdateCategory} />
                    <footer className="modal-card-foot">
                        <button className="button is-success" onClick={() => {
                            updateCategory(categoryId, updatedCategory).then(() => {
                                setEditActive(false)
                                setUpdatedCategories({
                                    label: ""})
                            })
                        }}>Save</button>
                        <button className="button" onClick={() => { setEditActive(false) }}>Cancel</button>
                    </footer>
                </div>
            </div>
        </>
    )
}



    //  return <div className={deleteActive ? "modal is-active" : "modal"}>
    //             <div className="modal-background"></div>
    //             <div className="modal-card">
    //                 <header className="modal-card-head">
    //                     <p className="modal-card-title">Delete Category?</p>
    //                 </header>
    //                 <section className="modal-card-body">
    //                     Are you sure you want to delete this category
    //                 </section>
    //                 <footer className="modal-card-foot">
    //                     <button className="button is-success" onClick={() => {
    //                         deleteCategory(id).then(() => {setDeleteActive(false)})}}>Delete</button>
    //                     <button className="button" onClick={() => { setDeleteActive(false) }}>Cancel</button>
    //                 </footer>
    //             </div>
    //         </div>



    /*   const [updatedCategory, setUpdatedCategories] = useState({
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
        onClick={() => {addCategory(updatedCategory).then(() => navigate("/categories"))}}>Save</button>
</> */