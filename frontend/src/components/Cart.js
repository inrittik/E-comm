import React from 'react';


const cartTile={
    marginTop: "10px",
    marginLeft: "10px",
    padding:"50px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "75%",
    backgroundColor: "white",
    color: "black",
}
const productDetails = {
    textAlign: "center",
    color: "black",
    textDecoration: "none",
    fontSize: "24px",
    fontWeight: "600"
}
const productQuantity = {
    fontWeight: "600",
    fontSize: "22px"
}
const productImage = {
    maxHeight: "150px"
}
const quantitySelect = {
    padding: "5px",
    width: "100px",
    borderRadius: "5px",
    border: "0.5px solid #7b8484",
    backgroundColor: "#ebecec",
    fontSize: "18px",
    boxShadow: "3px 3px 3px 2px rgba(0,0,0,0.36)",
}
const quantity = {
    float: "right",
    borderRadius: "3px",
    border: "0.2px solid #7b8484"
}
const productPrice = {
    textAlign: "center",
    color: "black",
    fontSize: "20px",
    fontWeight: "600"
}
export default function Cart(props) {
    return (      
         <div className="cart-tile" style={cartTile}>
             <div className="image">
                <a href="/" className="product-image"><img src={props.image} alt="" style={productImage}/></a>
             </div>
            <a href="/" className="product-details" style={productDetails}>
                {`${props.brand} ${props.title}`}
            </a>
            <div className="product-quantity" style={productQuantity}>
                <div className="quantity-select" style={quantitySelect}>
                    Qty. {props.quantity}
                    <select name="quantity" style={quantity}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>
            <div style={productPrice}>Rs. {props.price}</div>
        </div>           
    )
}

