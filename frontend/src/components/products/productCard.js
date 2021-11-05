import React from 'react'
import './productCard.css'

export default function Card(props) {
    return (
        <div className="productCardSection">
            <div className="productCardBorder">
            <h4 className="card-title pt-2" >{props.title}</h4>
            <a href="/" className="btn"><img src={props.image} className="card-img-top w-75" alt={props.image_alt}/></a>
            <div className="card-body">
                <h4 style={{textAlign: 'center'}}>Rs. {props.price}</h4>
                <p className="card-text">{props.description}</p>
            </div>
            </div>
        </div>
    )
}
