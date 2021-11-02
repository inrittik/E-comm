import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Corousel from './Carousel/Carousel';
import Card from './Card/Card'
import cardData from './Card/CardDetails';
import ProductCard from './products/productCard';
// import productDetails from './products/productsDetails';
import Footer from './Footer';


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
      <div className="container mt-1" style={{maxWidth: "90vw"}}>
      <Corousel/>
    </div>
    <div className="cardSection" style={{justifyContent: "space-around"}}>
      {
        cardData.cards.map((card)=>(
          <Card key={card._id} title={card.heading} description={card.description}/>
        )
        )
      }
    </div>
    <div className="cardSection" style={{justifyContent: "space-around"}}>
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
