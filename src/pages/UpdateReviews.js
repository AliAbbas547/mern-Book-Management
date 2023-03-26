import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function UpdateReviews() {
const [value,setValue]=useState("")  
const [data, setData]= useState({
  reviewedBy:"",
  rating:"",
  review:"",
  reviewedAt:"",
  bookId:"",
  reviewId:""    
})

const handleSubmit= async(e)=>{
  try{
    e.preventDefault()
    console.log(data)
  let t1=  await  axios.put(`http://localhost:3001/books/${data.bookId}/review/${data.reviewId}`,data)

  console.log(t1.data.data.reviewsData)
  setValue(t1.data.data.reviewsData)

   setData({
    reviewedBy:"",
    rating:"",
    review:"",
    reviewedAt:"",
    bookId:"",
    reviewId:"" 
  
   })
   alert("updated successfully")


  }
  catch(err){
  alert(err.message)
  console.log(Response.message)
  }
} 

const onChange= (e)=>{
   
  setData({...data,[e.target.name]:e.target.value})
}

  return (
    <>
       <div className="container">
     {
      value.length===0? <h1 className="text-center fw-bold mt-3">Update Review Data</h1>:""
     }

 {
  value.length!==0?<div className="d-flex justify-content-around">

<div className="text-center fs-2 fw-bold mt-3 me-1">
 Updated Review Data
</div>
<div>
  <Link to="/getBooksDataWithReviews"> <button type="button" className="btn btn-info mt-4">getBooksDataWithReviews</button></Link>
</div>

  </div>:""
 }




     {value.length===0?<div>   <form onSubmit={handleSubmit}>
       
          <div className="form-group mb-3 mt-4">
            
            <label for="exampleInputEmail1">bookId</label>
            <input
              type="text"
              className="form-control "
              placeholder="Enter bookId here mandatory" value={data.bookId}  name="bookId"  onChange={onChange}
            />
          </div>
          <div className="form-group mb-3 mt-4">
            
            <label for="exampleInputEmail1">reviewedId</label>
            <input
              type="text"
              className="form-control "
              placeholder="Enter reviewId here mandatory" value={data.reviewId}  name="reviewId"  onChange={onChange}
            />
          </div>
          <div className="form-group mb-3 mt-4">
            
            <label for="exampleInputEmail1">reviewedBy</label>
            <input
              type="text"
              className="form-control "
              placeholder="Enter reviewedBy here mandatory" value={data.reviewedBy}  name="reviewedBy"  onChange={onChange}
            />
          </div>
          <div className="form-group mb-3 mt-4">
            
            <label for="exampleInputEmail1">rating</label>
            <input
              type="text"
              className="form-control "
              placeholder="Enter rating here mandatory" value={data.rating}  name="rating"  onChange={onChange}
            />
          </div>
          <div className="form-group mb-3 mt-4">
            
            <label for="exampleInputEmail1">review</label>
            <input
              type="text"
              className="form-control "
              placeholder="Enter review here mandatory" value={data.review}  name="review"  onChange={onChange}
            />
          </div>
          <div className="form-group mb-3 mt-4">
            
            <label for="exampleInputEmail1">reviewedAt</label>
            <input
              type="text"
              className="form-control "
              placeholder="Enter reviewedAt here mandatory" value={data.reviewedAt}  name="reviewedAt"  onChange={onChange}
            />

          </div>

      
      
         
        

          <button type="submit" className=" m-3 btn btn-primary">
            Submit
          </button>
          {/* <Link to="/" className="m-3 btn btn-success">
            return to Home page
          </Link> */}
        </form></div>: ""      }
      


        

      {value.length!==0?<div> 

<div className='row text-center'>

       <div className='col my-3'>
        <div className="card" style={{width: "18rem"}}>
<img src="https://tse4.mm.bing.net/th?id=OIP.lax9AqfzQdCpYiK8Pl9dCwHaEo&pid=Api&P=0" className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title" >bookId: {value.bookId}</h5>
<p className="card-text fs-5"> Id: {value._id}</p>
<p className="card-text fs-5"> reviewedAt: {value.reviewedAt}</p>
<p className="card-text fs-5"> reviewedBy: {value.reviewedBy}</p>
<p className="card-text fs-5"> review: {value.review}</p>
<p className="card-text fs-5"> rating: {value.rating}</p>




</div>
</div>
       </div>
   
</div></div>:""}




      </div>
    </>
  );
}
