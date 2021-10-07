import React from 'react'
import Corousel from './Carousel/Carousel';
import Card from './Card/Card'
import cardData from './Card/CardDetails';
export default function Home() {
    return (
        <>
        <div className="container mt-1" style={{maxWidth: "90vw"}}>
          <Corousel/>
        </div>
        <div className="cardSection" style={{justifyContent: "space-around"}}>
          {
            cardData.cards.map((card)=>(
              <Card title={card.heading} description={card.description}/>
            )
            )
          }
        </div>
        </>
    )
}
