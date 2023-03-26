import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function UpdateBooksData() {
const[value,setValue]=useState([])  
const [data, setData]= useState({
  bookId:"",
  title:"",
  excerpt:"",
  releasedAt:"",
  ISBN:""
  
})

const handleSubmit= async(e)=>{
  try{
    e.preventDefault()
    console.log(data)
    let newData= {}
    if(data.title!==""){
      newData["title"]=data.title
    }
    if(data.excerpt!==""){
      newData["excerpt"]= data.excerpt
    }
    if(data.releasedAt!==""){
      newData["releasedAt"]=data.releasedAt
    }
    if(data.ISBN!==""){
      newData["ISBN"]= data.ISBN
    }
    
    console.log(localStorage.getItem("token"))
   let t1= await  axios.put(`http://localhost:3001/books/${data.bookId}`,newData,
   { headers: { "x-api-key": `${localStorage.getItem("token")}` } } )

   console.log(t1.data.data)
   console.log(value)
   setValue(t1.data.data)

    
   alert("updated successfully")

   setData({
    bookId:"",
    title:"",
    excerpt:"",
    releasedAt:"",
    ISBN:""
  
   })
   


  }
  catch(err){
  alert(err.message)
  console.log(Response.message)
  }
} 

const onChange=async (e)=>{
   
  setData({...data,[e.target.name]:e.target.value})
}

  return (
    <>
      <div class="container">
     {
      value.length===0? <h1 className="text-center fw-bold mt-3">Update Books Data</h1>: <h1 className="text-center fw-bold mt-3">updated Books Data</h1>
     }
     {value.length===0?<div>   <form onSubmit={handleSubmit}>
       
          <div class="form-group mb-3 mt-4">
            
            <label for="exampleInputEmail1">bookId</label>
            <input
              type="text"
              class="form-control "
              placeholder="Enter bookId here mandatory" value={data.bookId}  name="bookId"  onChange={onChange}
            />
          </div>
          <div class="form-group mb-3 mt-4">
            
            <label for="exampleInputEmail1">Title</label>
            <input
              type="text"
              class="form-control "
              placeholder="Enter title  here" value={data.title}  name="title"  onChange={onChange}
            />
          </div>
          <div class="form-group mb-3 mt-4">
          
            <label for="exampleInputEmail1">Excerpt</label>
            <input
              type="text"
              class="form-control "
              placeholder="Enter excerpt here" value={data.excerpt}  name="excerpt"  onChange={onChange}
            />
          </div>
          <div class="form-group mb-3 mt-4">
           
            <label for="exampleInputEmail1">releasedAt</label>
            <input
              type="text"
              class="form-control "
              placeholder="YYYY-MM-DD" value={data.releasedAt}  name="releasedAt"  onChange={onChange}
            />
          </div>
          <div class="form-group mb-3 mt-4">
          
            <label for="exampleInputEmail1">ISBN</label>
            <input
              type="text"
              class="form-control "
              placeholder="enter ISBN No. here " value={data.ISBN}  name="ISBN"  onChange={onChange}
            />
          </div>

          <button type="submit" class=" m-3 btn btn-primary">
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
<h5 className="card-title" >title: {value.title}</h5>
<p className="card-text fs-5"> Id: {value._id}</p>
<p className="card-text fs-5"> userId: {value.userId}</p>
<p className="card-text fs-5"> category: {value.category}</p>
<p className="card-text fs-5"> excerpt: {value.excerpt}</p>
<p className="card-text fs-5"> releasedAt: {value.releasedAt}</p>
<p className="card-text fs-5"> reviews: {value.reviews}</p>

</div>
</div>
       </div>
   
</div></div>:""}




      </div>
    </>
  );
}









