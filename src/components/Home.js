import React from 'react'
import Corousel from './Corousel';
import Card from './Card'
export default function Home() {
    return (
        <>
        <div className="container mt-1" style={{maxWidth: "90vw"}}>
          <Corousel/>
        </div>
        <div className="cardSection" style={{justifyContent: "space-around"}}>
          <Card title="Trending | Hot Picks"/>
          <Card title="Your recent purchases"/>
          <Card title="Recently viewed"/>
        </div>
        </>
    )
}
