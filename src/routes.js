import showBlogs from './components/showBlogs'
import listBlogs from './components/listBlogs'
import addBlogs from './components/addBlog'
import singleBlog from './components/singleBlog'
export default [
  {path:'/', component: showBlogs},
  {path:'/add', component: addBlogs},
  {path:'/list', component:listBlogs},
  {path: '/blog/:id', component: singleBlog}
]
