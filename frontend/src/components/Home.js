import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Corousel from './Carousel/Carousel';
import Card from './Card/Card'
import cardData from './Card/CardDetails';
import ProductCard from './products/productCard';
import Footer from './Footer';

const cardSection = {
  justifyContent: "space-around",
  backgroundColor: "#f3f4f4",
  zIndex: "1",
  marginTop: "-100px"
}

const productCardSection = {
  justifyContent: "space-around",
  backgroundColor: "#f3f4f4",
}
export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    axios("/api/products")
      .then(response=>{
        setProducts(response.data);
      })
  }, [])
    return (
      <>
      <div>
      <Corousel/>
    </div>
    <div className="cardSection" style={cardSection}>
      {
        cardData.cards.map((card)=>(
          <Card key={card._id} title={card.heading} description={card.description}/>
        )
        )
      }
    </div>
    <div className="cardSection" style={productCardSection}>
      {
        products.map((product)=>(
          <ProductCard key={product._id} title={product.prodName} price={product.price} description={product.brand} image={product.image}/>
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
