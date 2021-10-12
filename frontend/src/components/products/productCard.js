import React from 'react'

const cardBorder={
    borderRadius : '15px',
    boxShadow: '4px 4px 4px #888888',
    // height: '60vh',
    // width: '20vw',
    textAlign: 'center',
    margin: '5vh 5vw',
}


export default function Card(props) {
    return (
        <div>
            <div style={cardBorder}>
            <h4 className="card-title pt-2" >{props.title}</h4>
            <a href="/" className="btn"><img src={props.image} className="card-img-top w-75" alt={props.image_alt}/></a>
            <div className="card-body">
                <p className="card-text">{props.description}</p>
            </div>
            </div>
        </div>
    )
}
