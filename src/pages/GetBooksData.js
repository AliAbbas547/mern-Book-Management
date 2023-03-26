import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

export default function GetBooksData() {
const [search,setSearch]= useState("")
const [filterData,setFilterData]= useState([])
const [data,setData]=useState([])
// const[data1,setData1]=useState({
//   userId:"",
//   category:"",
//   subcategory:""
// })

const getData= async(e)=>{
  try{
   
    let t1= await axios.get("http://localhost:3001/books")
   console.log(localStorage.getItem("userId"))
    setData(t1.data.data)
    setFilterData(t1.data.data)
   


     
  }
  catch(err){
    alert(err.message)
   console.log(err.message)
  }
}

useEffect(()=>{
    getData()
    console.log("done")
},[])

const onChange=(e)=>{
  let getData= e.target.value
  setSearch(getData)
  console.log(getData)

  if(getData.length>0){
    const newData= data.filter((x)=>x.title.toLowerCase().includes(getData)|| x.category.toLowerCase().includes(getData)|| x.userId===getData)
    console.log(newData)
    setData(newData)
  }
  else{
    setData(filterData)
  }
  setSearch(getData)
  
}

  return (
    
    <div className='container'>

        <div>
        <div className="d-flex justify-content-center mt-5 me-5">
    <input className="form-control mr-sm-2 " type="search"   style={{borderColor:"blue",borderWidth:"2px"}}  placeholder="apply filter here " aria-label="Search" value={search} onChange={onChange}/>

   <div> <Link to="/getBooksDataWithReviews"><button type="button" className="btn btn-info mx-4">getBooksDataWithReviews</button></Link> </div>
   <div> <Link to="/"><button type="button" className="btn btn-warning mx-4">Home</button></Link> </div>

     </div>
     
   

  
            </div>   
        <h2 className='text-center mt-5'>Get Books Data</h2>
        <div className='row text-center'>
          {data.map((x)=>{
            return (
                <div className='col my-3'>
                 <div className="card" style={{width: "18rem"}}>
  <img src="https://tse4.mm.bing.net/th?id=OIP.lax9AqfzQdCpYiK8Pl9dCwHaEo&pid=Api&P=0" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title" >title: {x.title}</h5>
    <p className="card-text fs-5"> Id: {x._id}</p>
    <p className="card-text fs-5"> userId: {x.userId}</p>
    <p className="card-text fs-5"> category: {x.category}</p>
    <p className="card-text fs-5"> excerpt: {x.excerpt}</p>
    <p className="card-text fs-5"> releasedAt: {x.releasedAt}</p>
    <p className="card-text fs-5"> reviews: {x.reviews}</p>
   
  </div>
</div>
                </div>
            )
          })}
        </div>
      
    </div>
  )
}
