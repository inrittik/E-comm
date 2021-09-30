
import React from 'react'

const cardBorder={
    borderRadius : '15px',
    boxShadow: '10px 8px 8px #888888',
    hover: {
        transform: 'scale(1.1)',
    }
}
export default function Card() {
    return (
        <div>
            <div className= "card text-center w-100" style={cardBorder}>
            <h4 className="card-title" >Card title</h4>
            <a href="/" className="btn"><img src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/Jupiter21/Teaser3-cc_1x1._SY304_CB639696076_.jpg" className="card-img-top w-75" alt="cardImage"/></a>
            <div className="card-body">
                <p className="card-text">Description in Cards</p>
            </div>
            </div>
        </div>
    )
}
