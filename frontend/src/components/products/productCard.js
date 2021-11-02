import React from 'react'
import './productCard.css'
// const cardBorder={
//     borderRadius : '15px',
//     boxShadow: '4px 4px 4px #888888',
//     textAlign: 'center',
//     margin: '5vh 5vw',
// }


export default function Card(props) {
    return (
        <div className="cardSection">
            <div className="cardBorder">
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
