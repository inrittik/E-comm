import React from 'react'
import LocalMall from '@material-ui/icons/LocalMall'
import Search from '@material-ui/icons/Search'
import Cart from '@material-ui/icons/ShoppingCart'
import Profile from '@material-ui/icons/AccountCircle'
export default function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark" style={{backgroundColor: "#073478"} }>
            <div className="container-fluid">
            <a className="navbar-brand" href="/">
            <LocalMall fontSize="large" className="d-inline-block align-text-top" style={{fill: "#1489EB"}}/>{' '}E-Comm
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Shop By Categories
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/">Men's Wear</a></li>
                        <li><a className="dropdown-item" href="/">Women's Wear</a></li>
                        <li><a className="dropdown-item" href="/">Kid's Wear</a></li>
                        <li><a className="dropdown-item" href="/">Sports</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="/">Other Categories</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link-active" href="/"><Cart fontSize="large" style={{fill: "#65A0F6"}}/></a>
                </li>
            </ul>
            <form className="d-flex w-50 me-auto">
                <input className="form-control me-2" type="search" placeholder="Search Items" aria-label="Search"/>
                <button className="btn btn-outline-light" type="submit"><Search fontSize="medium" style={{fill: "#1489EB"}}/></button>
            </form>
            <ul className="navbar-nav me-right mb-0 mb-lg-0 ">
                <li className="nav-item">
                    <a className="nav-link" href="/"><Profile fontSize="large"/>Sign In</a>
                </li>
            </ul>
            
            </div>
            </div>
        </nav>

    )
}

