import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
 function Navbar() {
const navigate=useNavigate()
const onClick=()=>{
  localStorage.removeItem("token")
  navigate("/")
}

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary  ">
  <div className="container-fluid ">
    <Link className="navbar-brand fs-1 fst-italic"  to="/">Books Management</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-sm-end" id="navbarNav">
      <ul className="navbar-nav ">
        
      
      {!localStorage.getItem("token")?<div className='d-flex'>
      
      <li className="nav-item">
          <Link className="nav-item nav-link fs-6 text-white  btn btn-dark me-4 fw-bold" style={{borderRadius:"10px"}} to="/login">Login</Link>
        </li>
        <li className="nav-item d-inline">
          <Link className="nav-item nav-link fs-6 text-white btn btn-warning fw-bold" style={{borderRadius:"10px"}} to="/createUser">SignUp</Link>
        </li>

      </div>:""}
       
       {localStorage.getItem("token")?<div className='d-flex '>

       <li className="nav-item dropdown fs-5 ">
          <Link className="nav-link dropdown-toggle btn btn-danger text-white fw-bold fs-6" data-bs-toggle="dropdown" aria-expanded="false">
            get All Books 
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/createBooks">CreateBooks</Link></li>
            <li><Link className="dropdown-item" to="/getBooksData">GetBooksData</Link></li>
            <li><Link className="dropdown-item " to="/getBooksDataWithReviews">BooksDataWithReviews</Link></li>
            <li><Link className="dropdown-item" to="/CreateReviews">CreateReviews</Link></li>
            <li><Link className="dropdown-item" to="/updateReviews">UpdateReviews</Link></li>
            <li><Link className="dropdown-item" to="/DeleteReviews">DeleteReviews</Link></li>
            <li><Link className="dropdown-item" to="/UpdateBooksData">UpdateBooksData</Link></li>
            <li><Link className="dropdown-item" to="/DeleteBooksData">DeleteBooksData</Link></li>
            
          </ul>
         
        </li>

        <div><button type="button" className="btn btn-warning  mx-4 fw-bold" onClick={onClick}  style={{height:"42px"}}>Logout</button></div>
        
       
        

       </div>:""}
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;