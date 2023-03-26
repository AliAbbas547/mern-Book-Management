
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateBooks() {
    
const [data, setData]= useState({

    title:"",
    excerpt:"",
    ISBN:"",
    category:"",
    subcategory:"",
    releasedAt:""
    
})
let  navigate= useNavigate()
const handleSubmit= async(e)=>{
  try{
    e.preventDefault()
    
    data.userId=localStorage.getItem("userId")
    
   await  axios.post("http://localhost:3001/books",data)
  alert("created successfully")
  
  console.log(data)

 
   setData({
   
    title:"",
    excerpt:"",
    userId:"",
    ISBN:"",
    category:"",
    subcategory:"",
    releasedAt:""
  
   })

    navigate("/getBooksData")
   


  }
  catch(err){
  alert(err.response.data.message)
  console.log(err.response.data.message)
  }
} 

const onChange=async (e)=>{
   
  setData({...data,[e.target.name]:e.target.value})
}

const move=async()=>{
    // navigate("/")
}

  return (
    <>
      <div class="container" >
        <form onSubmit={handleSubmit}>
         
        <h1 className="text-center mt-4 fw-bold"> Create Books</h1>
          <div class="form-group mb-3 mt-5">
        
            <label for="exampleInputEmail1">title</label>
            
            <input
              type="text"
              class="form-control"
              placeholder="Enter title"  value={data.title}  name="title"  onChange={onChange}
            />
          </div>
          <div class="form-group mb-3 mt-5">
            <label for="exampleInputPassword1">excerpt</label>
            <input
              type="text"
              class="form-control"
              placeholder="excerpt"   value={data.excerpt}   name="excerpt"  onChange={onChange}
            />
          </div>
          <div class="form-group mb-3 mt-5">
            <label for="exampleInputEmail1">ISBN</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter ISBN"  value={data.ISBN}  name="ISBN"  onChange={onChange}
            />
          </div>
          <div class="form-group mb-3 mt-5">
            <label for="exampleInputEmail1">category</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter category"  value={data.category}  name="category"  onChange={onChange}
            />
          </div>
          <div class="form-group mb-3 mt-5">
            <label for="exampleInputEmail1">subcategory</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter subcategory"  value={data.subcategory}  name="subcategory"  onChange={onChange}
            />
          </div>
          <div class="form-group mb-3 mt-5">
            <label for="exampleInputEmail1">Released Date</label>
            <input
              type="text"
              class="form-control"
              placeholder="YYYY-MM-DD"  value={data.releasedAt}  name="releasedAt"  onChange={onChange}
            />
          </div>
          

          <button type="submit" class=" m-3 btn btn-primary" onClick={move}>
            Submit
          </button>
          {/* <Link to="/createUser" className="m-3 btn btn-success">
            I am new a user
          </Link> */}
          
        </form>
      </div>
    </>
  );
}


