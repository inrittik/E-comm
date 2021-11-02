import React from 'react'

const cartTile={
    margin: "10px",
    padding:"50px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "75%",
    backgroundColor: "white",
    color: "black",
    // boxShadow: "10px 8px 8px #888888",
    border: "1px solid black",
    borderRadius: "15px"
}
const productDetails = {
    textAlign: "center",
    color: "black",
    textDecoration: "none",
    fontSize: "28px"
}
const productReview = {
    padding: "5px",
    color: "black",
    backgroundColor: "#f6db45",
    fontSize: "22px",
    textDecoration: "none",
    boxShadow: "4px 4px 4px grey",
    borderRadius: "5px"
}
const productQuantity = {
    fontWeight: "600",
    fontSize: "22px"
}
const productImage = {
    maxHeight: "150px"
}
export default function Cart(props) {
    return (      
         <div className="cart-tile" style={cartTile}>
            <div className="product-details" style={productDetails}>
                <div>{props.title}</div>
                <div>Rs. {props.price}</div>
            </div>
            <a href="/" className="product-image"><img src={props.image} alt="" style={productImage}/></a>
            <div className="product-quantity" style={productQuantity}>Quantity: {props.quantity}</div>
            <a href="/" className="product-review" style={productReview}>Review product</a>
        </div>           
    )
}

