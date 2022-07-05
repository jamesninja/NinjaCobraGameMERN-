import React from "react";
import { useForm } from "react-hook-form";
import { useState } from 'react';
import NavBar from './NavBar';
// import Search from "./Search";
import "./Upload.css";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("")

  const handlePost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts",{
      method: "POST",
      body:JSON.stringify(data)
    })
    .then((response) => {
      console.log("post ok")
      console.log(data) 
      return response.json()
    }) 
    .catch((error) => {
      console.log(error)
    })
    
  }
  
  return (
   
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
     <NavBar/>
     <label>Title</label>
      <div classNam ="to-Title">
        <input type="text" name="title" {...register('article')} />
      </div>
      <div className ="to-comment">
        <input  type="textarea" name="Article" {...register('commentArticle')} />
      </div>
      <button onClick={handlePost}>Submit</button>
        {data}
    </form>
  );
};
export default RegisterForm;












