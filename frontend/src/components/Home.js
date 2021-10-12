import React from 'react';
import Corousel from './Carousel/Carousel';
import Card from './Card/Card';
import cardData from './Card/CardDetails';
// import ProductCard from './products/productCard';
// import productDetails from './products/productsDetails';

// const container = {
//   justifyContent: 'space-around',
//   flexWrap: 'wrap'
// }
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
        {/* <div className="productSection mt-3 d-flex flex-wrap" style={{container}}>
          {
            productDetails.products.map((product)=>(
              <ProductCard title={product.prodName} description={product.brand} image={product.image}/>
            )
            )
          }    
        </div> */}
        </>
  )
}