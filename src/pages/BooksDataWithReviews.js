import React, {  useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function BooksDataWithReviews() {
  const [data,setData]=useState([])
  const [data1,setData1]=useState({
    ISBN:"",
    category:"",
    excerpt:"",
    reviews:""
    
  })
  const[BookId,setBookId]=useState('')
  const navigate= useNavigate()

const getData= async()=>{
    try{

    let value= await axios.get(`http://localhost:3001/books/${BookId}`)
    // console.log(value.data.data)
       const{ISBN,category,excerpt,reviews,reviewsData}=value.data.data
       console.log(reviewsData.length)
       setData(reviewsData)
       setData1({...data1,ISBN:ISBN,category:category,excerpt:excerpt,reviews:reviews})
       console.log(data.length)
       
       if(reviewsData.length===0){
        alert("no review present for this book")
        navigate("/getBooksData")
       }
       
     
 

    }
    catch(err){
      alert(err.message)
        console.log(err.message)
    }
}


  return (
    
    <div className='container'>
   <div className='d-flex justify-content-center '>

   {data.length===0?
    <div className='text-center mt-3 fw-bolder fs-3 text-info mb-3'>getBooksData with reviews</div>
    :""
   }

   {
    data.length!==0?<div className='mt-3 d-flex '><div className='text-center mt-3 fw-bolder text-info mb-3 mx-4 mt-4'>
    <Link to="/"> <button type="button" className="btn btn-warning fw-bold">Home</button></Link>
   </div>
   <div className='text-center mt-3 fw-bolder text-info mb-3 mx-4 mt-4'>
    <Link to="/updateReviews"> <button type="button" className="btn btn-info fw-bold">Update Reviews</button></Link>
   </div>
   <div className='text-center mt-3 fw-bolder text-info mb-3 mx-4 mt-4'>
    <Link to="/DeleteReviews"> <button type="button" className="btn btn-danger fw-bold">Delete Reviews</button></Link>
   </div>
</div>:""

    
   }
   </div>

    {
      BookId ===""?<div>
            
    <div class="form-group mb-3">
            <label for="exampleInputEmail1">BookId</label>
            <input
              type="text"
              class="form-control"
              placeholder=" firstly provide BookId here  "  value={BookId}   onChange={(e)=>setBookId(e.target.value)}
            />
             
          </div>
        
      </div>:""
    }

    {
      data.length===0?<div>
             <button type="button" class="btn btn-primary" onClick={getData}>click here to see the data</button>

         </div>:''
    }

   {
    data.length!==0? <div className='text-center fs-3 bg-dark me-5 mt-3 mb-2 text-white fw-bold'>
    <div> ISBN : {data1.ISBN}</div>
    <div> category: {data1.category}</div>
    <div> excerpt: {data1.excerpt}</div>
    <div> reviews: {data1.reviews}</div>
    <div> BookId: {BookId}</div>
  </div>:""
   }
   
    <div className='row text-center'>
      {data.map((x)=>{
        return (
            <div className='col my-3'>
             <div className="card" style={{width: "18rem"}}>
<img src="https://wallpapercave.com/wp/wp2036967.jpg" className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title" >bookId: {x.bookId}</h5>
<p className="card-text fs-5"> rating: {x.rating}</p>
<p className="card-text fs-5"> review: {x.review}</p>
<p className="card-text fs-5"> reviewedAt: {x.reviewedAt}</p>
<p className="card-text fs-5"> reviewedBy: {x.reviewedBy}</p>
<p className="card-text fs-5"> id: {x._id}</p>

</div>
</div>
            </div>
        )
      })}
    </div>
  
</div>
  )
}
