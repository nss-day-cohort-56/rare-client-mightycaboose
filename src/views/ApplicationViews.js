import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { CategoryForm } from "../components/categories/CategoryForm"
import { CategoryList } from "../components/categories/CategoryList"
import { Authorized } from "./Authorized"
import { PostList } from "../components/posts/postList"
import { MyPosts } from "../components/posts/MyPosts"
import { TagForm } from "../components/tags/TagForm"
import { TagList } from "../components/tags/TagList"

export const ApplicationViews = ({ token, setToken }) => {
  return <>
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />}  />
      <Route path="/register" element={<Register setToken={setToken} />}  />
      <Route element={<Authorized token={token} />}>
      {<Route path="/all_posts" element={<PostList />}/>}
      {<Route path="/my_posts" element={<MyPosts token={token}/>}/>} 
        {/* Add Routes here */}
        <Route path="/categories" element={<CategoryList/>} />
        <Route path="/categories/new" element={<CategoryForm/>} />
        <Route path="/tags/new" element={<TagForm/>} />
        <Route path="/tags" element={<TagList/>} />

      </Route>
    </Routes>
  </>
}

//MyPosts token={token} }