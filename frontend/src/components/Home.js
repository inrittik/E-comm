import React from 'react'
import Corousel from './Carousel/Carousel';
import Card from './Card/Card'
import cardData from './Card/CardDetails';
import ProductCard from './products/productCard';
import productDetails from './products/productsDetails';
import Footer from './Footer';
export default function Home() {
    return (
      <>
      <div className="container mt-1" style={{maxWidth: "90vw"}}>
      <Corousel/>
    </div>
    <div className="cardSection">
      {
        cardData.cards.map((card)=>(
          <Card title={card.heading} description={card.description}/>
        )
        )
      }
    </div>
    <div className="cardSection" style={{justifyContent: "space-around"}}>
      {
        productDetails.products.map((product)=>(
          <ProductCard title={product.prodName} price={product.price} description={product.brand} image={product.image}/>
        )
        )
      }    
    </div>
    <div>
        <Footer/>
    </div>
    </>
    )
}
