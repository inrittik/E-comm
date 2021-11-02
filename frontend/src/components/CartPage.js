import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cart from './Cart'
// import { Link  } from "react-router-dom";

const cartSection = {
    margin: "20px",
    padding: "20px",
    border: "1px solid black",
    backgroundColor: "#bfbdbc"
}
const title = {
    padding: "10px 10px",
    fontSize: "32px",
    fontFamily: "Helvetica",
    fontWeight: "700"
}
const checkout = {
    float: "right",
    textDecoration: "none",
    margin: "30px 50px",
    padding: "10px",
    backgroundColor: "#f6db45",
    color: "black",
    fontSize: "24px",
    boxShadow: "4px 4px 4px grey",
    borderRadius: "5px"
}
const totalCheckoutPrice = {
    margin: "30px 50px",
    padding: "10px",
    float: "left",
    fontSize: "22px",
    fontWeight: "550",
    backgroundColor: "#e0e1e3",
    borderRadius: "5px"
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
    return (
        <>
        <div className="cart-section" style={cartSection}>
            <div className="title" style={title}>Your Cart</div>
                <div className="body">
                    {
                        products.map((product) => (
                            <Cart key={product._id} title={product.prodName} quantity={product.quantity} image={product.image} price={product.price}/>
                        )
                        )
                    }
                </div>
        </div>
        <div style={totalCheckoutPrice}>Total Price: Rs. {totalPrice}</div>
        <a href="/" className="checkout" style={checkout}>Checkout</a>
        </>
    )
}
