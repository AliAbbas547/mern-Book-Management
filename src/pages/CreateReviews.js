
import axios from "axios";
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

export default function CreateReviews() {
    
const [data, setData]= useState({

    bookId:"",
    reviewedBy:"",
    rating:"",
    review:"",
    reviewedAt:""
    
})
let  navigate= useNavigate()
const handleSubmit= async(e)=>{
  try{
    e.preventDefault()
    console.log(data)
   await  axios.post(`http://localhost:3001/books/${data.bookId}/review`,data)

   alert("review create successfully")
  
   
 
   setData({
  
    bookId:"",
    reviewedBy:"",
    rating:"",
    review:"",
    reviewedAt:""
 
   })

 navigate("/getBooksDataWithReviews")
   


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
      <div className="container" >
      <h1 className=" text-center fw-bold mt-3 ">Create reviews</h1>
        <form onSubmit={handleSubmit}>
         
      

          <div className="form-group mb-3 mt-5">
          
            <label for="exampleInputEmail1">BookId</label>
            
            <input
              type="text"
              className="form-control"
              placeholder="Enter bookId"  value={data.bookId}  name="bookId"  onChange={onChange}
            />
          </div>
          <div className="form-group mb-3 mt-5">
            <label for="exampleInputPassword1">reviewedBy</label>
            <input
              type="text"
              className="form-control"
              placeholder="reviewedBy"   value={data.reviewedBy}   name="reviewedBy"  onChange={onChange}
            />
          </div>
          <div className="form-group mb-3 mt-5">
            <label for="exampleInputEmail1">rating</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter rating"  value={data.rating}  name="rating"  onChange={onChange}
            />
          </div>
          <div className="form-group mb-3 mt-5">
            <label for="exampleInputEmail1">review</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter review"  value={data.review}  name="review"  onChange={onChange}
            />
          </div>
          <div className="form-group mb-3 mt-5">
            <label for="exampleInputEmail1">reviewedAt</label>
            <input
              type="text"
              className="form-control"
              placeholder="YYYY-MM-DD"  value={data.reviewedAt}  name= "reviewedAt"  onChange={onChange}
            />
          </div>
       
       
    

          <button type="submit" className=" m-3 btn btn-primary" onClick={move}>
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


