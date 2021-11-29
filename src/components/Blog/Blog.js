import React from 'react'
import "./Blog.css";
import blog from "./../../assets/images/blog.png"
const Blog = () => {
  return (
    <div className="Blog" id="bg" >
      <h1 className="blog-title">Blog</h1>
       <div className="blog--item"><img src={blog} alt="electrical-studio"/>
        <a href="https://cssmastery.herokuapp.com/"className="cover"><h1>Yolk Farm</h1><button>Learn More</button></a></div>
    </div >
  )
}
export default Blog;
