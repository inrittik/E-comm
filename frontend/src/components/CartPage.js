import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cart from './Cart'
// import { Link  } from "react-router-dom";
const cartSection = {
    backgroundColor: "#e2e4e2",
    height: "100vh",
}
const body = {
    marginLeft: "5vw",
    padding: "20px",
    width: "70%",
    position: "absolute",
    left: "0"
}
const title = {
    margin: "0 5vw",
    padding: "10px 20px",
    fontSize: "32px",
    fontFamily: "Helvetica",
    fontWeight: "500"
}
const checkout = {
    textDecoration: "none",
    backgroundColor: "#fdcf02",
    color: "black",
    fontSize: "18px",
    boxShadow: "2px 2px 4px grey",
    borderRadius: "5px",
    padding: "5px 40px",
}
const totalCheckoutPrice = {
    margin: "5px 15px",    
    fontSize: "22px",
    fontWeight: "550",
    backgroundColor: "white",
    borderRadius: "5px"
}
const checkoutSection = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    float: "right",
    width: "22vw",
    height: "25vh",
    marginTop: "5vh",
    marginRight: "7vw",
    backgroundColor: "white",
}
export default function CartPage() {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
    axios("/cart")
      .then(response=>{
        setProducts(response.data);
      })
    }, []);
    let totalPrice = 0;
    products.forEach((product)=>{
        totalPrice+= product.price*product.quantity;
    });
    const cartStatus = () => {
        if(products.length === 0){
            return "Shopping Cart Empty";
        }
        else{
            return "Shopping Cart";
        }
    }
    return (
        <div className="cart-section" style={cartSection}>
            <div className="title" style={title}>
                {cartStatus()}
            </div>
            <div className="body" style={body}>
                {
                    products.map((product) => (
                        <Cart key={product._id} brand={product.brand} title={product.prodName} quantity={product.quantity} image={product.image} price={product.price}/>
                    )
                    )
                }
            </div>
            <div className="checkout-section" style={checkoutSection}>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="amazon-protect" />
                <div style={totalCheckoutPrice}>Subtotal: Rs. {totalPrice}</div>
                <a href="/" className="checkout" style={checkout}>Proceed to buy</a>
            </div>
        </div>
    )
}
