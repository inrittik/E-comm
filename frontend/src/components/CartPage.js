import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cart from './Cart'
// import { Link  } from "react-router-dom";

const cartSection = {
    margin: "20px",
    padding: "20px",
    backgroundColor: "white",
    width: "100%"
}
const title = {
    display: "inline-block",
    padding: "10px 10px",
    fontSize: "32px",
    fontFamily: "Helvetica",
    fontWeight: "700"
}
const checkout = {
    float: "right",
    textDecoration: "none",
    margin: "30px 30px",
    padding: "10px",
    backgroundColor: "#f6db45",
    color: "black",
    fontSize: "24px",
    boxShadow: "2px 2px 4px grey",
    borderRadius: "5px"
}
const totalCheckoutPrice = {
    marginLeft: "80vw",
    margin: "30px 50px",
    padding: "10px",
    width: "300px",
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
    const cartStatus = () => {
        if(products.length === 0){
            return "Shopping Cart Empty";
        }
        else{
            return "Shopping Cart";
        }
    }
    return (
        <>
        <div className="cart-section" style={cartSection}>
            <div className="title" style={title}>{cartStatus()}</div>
            <div style={totalCheckoutPrice}>Total Price: Rs. {totalPrice}</div>
            <a href="/" className="checkout" style={checkout}>Proceed to buy</a>
                <div className="body">
                    {
                        products.map((product) => (
                            <Cart key={product._id} brand={product.brand} title={product.prodName} quantity={product.quantity} image={product.image} price={product.price}/>
                        )
                        )
                    }
                </div>
        </div>
        {/* <a href="/" className="checkout" style={checkout}>Proceed to buy</a> */}
        </>
    )
}
