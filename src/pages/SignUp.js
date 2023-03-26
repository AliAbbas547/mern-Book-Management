import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  
const [data, setData]= useState({
  title:"",
  name:"",
  phone:"",
  email:"",
  password:"",


})
const [address,setAddress]= useState({
  street:"",
  city:"",
  pincode:""
})

const handleSubmit= async(e)=>{
  try{
    console.log(data)
   
    data["address"]=address
    e.preventDefault()
    
  let t1=  await  axios.post("http://localhost:3001/register",data)
   console.log(t1)
   setData({
  
    title:"",
    name:"",
    phone:"",
    email:"",
    password:"",
   })
   setAddress({

    street:"",
    city:"",
    pincode:""
   })
   alert("successfully registered")


  }
  catch(err){
  alert(err.message)
  console.log(Response.message)
  }
} 

const onChange=async (e)=>{
   
  setData({...data,[e.target.name]:e.target.value})

}

const onChange1=async (e)=>{
   
 
  setAddress({...address,[e.target.name]:e.target.value})
}

  return (
    <>
      <div class="container">
        <form onSubmit={handleSubmit}>
          <div class="form-group mb-3 mt-4">
            <h1>User SignUp</h1>
            <label for="exampleInputEmail1">Title</label>
            <input
              type="text"
              class="form-control "
              placeholder="Enter title here" value={data.title}  name="title"  onChange={onChange}
            />
          </div>

          <div class="form-group mb-3">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter name "  value={data.name}  name="name"  onChange={onChange}
            />
          </div>
          <div class="form-group mb-3">
            <label for="exampleInputEmail1">Mobile No.</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter mobile No. "  value={data.phone}  name="phone"  onChange={onChange}
            />
          </div>
          <div class="form-group mb-3">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter email here "  value={data.email}  name="email"  onChange={onChange}
            />
          </div>
          <div class="form-group mb-3 ">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="Password"   value={data.password}   name="password"  onChange={onChange}
            />
          </div>
          <div class="form-group mb-3">
            <label for="exampleInputPassword1">Street</label>
            <input
              type="text"
              class="form-control"
              placeholder="enter your street here"  value={address.street}  name="street"  onChange={onChange1}
            />
          </div>
          <div class="form-group mb-3">
            <label for="exampleInputPassword1">City</label>
            <input
              type="text"
              class="form-control"
              placeholder="enter your city here"  value={address.city}  name="city"  onChange={onChange1}
            />
          </div>
          <div class="form-group mb-3">
            <label for="exampleInputPassword1">Pincode</label>
            <input
              type="text"
              class="form-control"
              placeholder="enter your Pincode here"  value={address.pincode}  name="pincode"  onChange={onChange1}
            />
          </div>
          

          <button type="submit" class=" m-3 btn btn-primary">
            Submit
          </button>
          <Link to="/Login" className="m-3 btn btn-success">
            Already a user
          </Link>
        </form>
      </div>
    </>
  );
}
