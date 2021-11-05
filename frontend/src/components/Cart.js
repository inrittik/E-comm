import React from 'react'

const cartTile={
    // margin: "10px",
    padding:"50px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "75%",
    backgroundColor: "white",
    color: "black",
    // boxShadow: "10px 8px 8px #888888",
    borderBottom: "0.5px solid black",
    borderTop: "0.5px solid black",
    // borderRadius: "15px"
}
const productDetails = {
    textAlign: "center",
    color: "black",
    textDecoration: "none",
    fontSize: "28px"
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
    width: "150px",
    borderRadius: "5px",
    border: "1px solid #7b8484",
    backgroundColor: "#ebecec"
}
const quantity = {
    float: "right"
}
export default function Cart(props) {
    return (      
         <div className="cart-tile" style={cartTile}>
            <a href="/" className="product-image"><img src={props.image} alt="" style={productImage}/></a>
            <a href="/" className="product-details" style={productDetails}>
                <div>{`${props.brand} ${props.title}`}</div>
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
            <div style={productDetails}>Rs. {props.price}</div>
        </div>           
    )
}

