//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
import { useState } from "react";
// import data 
import userData from "../../dummy-data"


const PostsPage = () => {
  // set up state for your data
  const [usersPost,setUsersPost] = useState(userData)
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {usersPost.map((newPost, index)=>{
        

       return <Post key={index} post ={ newPost}/>
       

      })}
      
    </div>
  );
};

export default PostsPage; 
