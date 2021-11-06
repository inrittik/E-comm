import React from 'react'
import './productCard.css'

export default function Card(props) {
    return (
        <div className="productCardSection">
            <div className="productCardBorder">
            <a href="/" className="btn"><img src={props.image} className="card-img-top w-75" alt={props.image_alt}/></a>
                <div className="card-body">
                    <p className="brand">{props.description}</p>
                    <a href="/"><p className="card-title" >{props.title}</p></a>
                    <p className="product-rating">
                        
                    </p>
                </div>
                <h6 style={{textAlign: 'center'}}>
                    <sup>&#8377;</sup> {props.price}</h6>
            </div>
        </div>
    )
}
