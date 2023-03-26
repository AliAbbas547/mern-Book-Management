import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id="carousel">
    <div className='carousel-caption' style={{zIndex:"10"}}>
    {/* <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form> */}
    </div>
    <div className="carousel-item active">
      <img src="https://images5.alphacoders.com/659/thumb-1920-659155.jpg" className="d-block w-100" style= {{filter:"brightness(60%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://c4.wallpaperflare.com/wallpaper/526/8/1002/library-interior-interior-design-books-wallpaper-preview.jpg" className="d-block w-100" style={{filter:"brightness(60%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://swall.teahub.io/photos/small/16-169535_2500x1562-beautiful-books-wallpaper-wallpapers-and-law-school.jpg" className="d-block w-100"style= {{filter:"brightness(60%)"}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </div>
      <Footer/>
    </div>
  )
}
