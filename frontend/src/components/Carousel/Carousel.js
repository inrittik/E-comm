import React from 'react'
import './Carousel.css';

export default function Carousel() {      
    return (        
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="https://m.media-amazon.com/images/I/71SDTPswjNL._SX3000_.jpg" className="carousel-img" alt="image1"/>
            </div>
            <div className="carousel-item">
            <img src="https://m.media-amazon.com/images/I/6153Nzpt6mL._SX3000_.jpg" className="carousel-img" alt="image2"/>
            </div>
            <div className="carousel-item">
            <img src="https://m.media-amazon.com/images/I/71vAox218GL._SX3000_.jpg" className="carousel-img" alt="image3"/>
            </div>            
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div> 
    
    )
}
