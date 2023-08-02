import React from 'react'

function carousel() {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{zIndex:"10"}}>
            <form className="d-flex">
              <input className="form-control mr-sm-2 me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0 text-white bg-success" type="submit">Search</button>
            </form>
          </div>
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://source.unsplash.com/random/300×300/?pizza" alt="First slide" style={{filter:"brightness(50%)"}} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://source.unsplash.com/random/300×300/?burger" alt="Second slide" style={{filter:"brightness(50%)"}} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://source.unsplash.com/random/300×300/?momos" alt="Third slide" style={{filter:"brightness(50%)"}}/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
    </div>
  )
}

export default carousel
