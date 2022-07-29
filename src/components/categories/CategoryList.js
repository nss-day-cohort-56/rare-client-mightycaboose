import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getCategories, deleteCategory } from "../../managers/CategoriesManager"


export const CategoryList = () => {
    const navigate = useNavigate()

    const [categories, setCategories] = useState([])
    const [editActive, setEditActive] = useState(false);
    const [deleteActive, setDeleteActive] = useState(false);
    const [categoryId, setCategoryId] = useState(0);

    const handleDeleteClick = (id) => {
        setDeleteActive(true)
        setCategoryId(id)
    }

    const handleEditClick = () => {
        /*

       */
    }

    useEffect(
        () => {
            getCategories().then(setCategories)
        }, []
    )
    return (
        <>
            <h1>Categories</h1>
            <button onClick={() => { navigate("/categories/new") }}>Create New Category</button>
            {categories.map(category => {
                return <>
                    <div>
                        <button onClick={() => { setEditActive(true) }}>Edit</button>
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
                        Are you sure you want to delete this category
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success" onClick={() => {
                            deleteCategory(categoryId).then(() => { setDeleteActive(false) })
                        }}>Delete</button>
                        <button className="button" onClick={() => { setDeleteActive(false) }}>Cancel</button>
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