
import React from "react";
import "./NavBarOffCanvas.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";


function NavBarOffCanvas() {  
  
  return (
    <div className="header">
      <Link to='/'>
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <Link to='/Login'>
            <span className="header__optionLineTwo">Sign In</span>
            </Link>
          </div>
        

        
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwos">& Orders</span>
          </div>
        
        


        <Link to='/checkout'>
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
          
          </div>
          </Link>
        
      </div>
    </div>
  );
}

export default NavBarOffCanvas;