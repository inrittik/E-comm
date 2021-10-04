import React from "react";
import LocalMall from '@material-ui/icons/LocalMall'
import Search from '@material-ui/icons/Search'
import Cart from '@material-ui/icons/ShoppingCart'
import Profile from '@material-ui/icons/AccountCircle'
import DehazeIcon from '@material-ui/icons/DehazeOutlined'

export default function NavBarOffCanvas() {
    return (
    <div>
        <nav className="navbar navbar-dark navbar-expand-lg sticky-top" style={{backgroundColor: "#073478"}}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/"><LocalMall fontSize="medium" className="d-inline-block align-text-top" style={{fill: "#1489EB"}}/>E-Comm</a>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{maxWidth:"70vw"}}>
            <div className="offcanvas-header bg-secondary">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">All</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body" style={{backgroundColor: "#073478"}}>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" style={{minWidth: 50}}>
                    <a className="nav-link active pt-3" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item dropdown" style={{minWidth: 50}}>
                    <a className="nav-link dropdown-toggle pt-3" href="/" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Shop By Categories
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                    <li><a className="dropdown-item" href="/">Men's Wear</a></li>
                    <li><a className="dropdown-item" href="/">Women's Wear</a></li>
                    <li><a className="dropdown-item" href="/">Kids' Wear</a></li>
                    <li>
                        <hr className="dropdown-divider"/>
                    </li>
                    <li><a className="dropdown-item" href="/">All Categories</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/"><Cart fontSize="large" style={{fill: "#65A0F6"}}/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/"><Profile fontSize="large"/>Sign In</a>
                </li>
                </ul>
                
            </div>
            </div>
            <form className="d-flex w-50 me-auto">
                <input className="form-control me-2" type="search" placeholder="Search Items" aria-label="Search"/>
                <button className="btn btn-outline-light" type="submit"><Search fontSize="medium" style={{fill: "#1489EB"}}/></button>
            </form>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <DehazeIcon fontSize="small" style={{fill: "#1489EB"}}/>
            </button>
        </div>
        </nav>
    </div>
    )
}
