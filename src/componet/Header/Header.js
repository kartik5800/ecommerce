import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <div className="top-header-area" id="sticker">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-sm-12 text-center">
                        <div className="main-menu-wrap">
                            {/* logo */}
                            <div className="site-logo">
                                <a href="index.html">
                                    <img src="assets/img/logo.png" alt />
                                </a>
                            </div>
                            {/* logo */}
                            {/* menu start */}
                            <nav className="main-menu">
                                <ul>
                                    <li className="current-list-item">
                                        {/* <a href="#">Home</a> */}
                                        <NavLink exact to={'/Home'} className='current-list-item'>Home</NavLink>
                                        <ul className="sub-menu">
                                            <li>
                                                {/* <a href="index.html">Static Home</a> */}
                                                <NavLink exact to={'/Home'} className='current-list-item'>Static Home</NavLink>
                                            
                                            </li>
                                            <li>
                                                {/* <a href="index_2.html">Slider Home</a> */}
                                                <NavLink exact to={'/Home1'} className='current-list-item'>Slider Home</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        {/* <a href="about.html">About</a> */}
                                        <NavLink exact to={'/About'} className='current-list-item'>About</NavLink></li>
                                    <li>
                                        {/* <a href="#">Pages</a>    */}
                                        <NavLink exact to={'/Pages'} className='current-list-item'>Pages</NavLink>
                                        <ul className="sub-menu">
                                            <li>
                                                {/* <a href="404.html">404 page</a> */}
                                            <NavLink exact to={'/A404'} className='current-list-item'>404 page</NavLink>
                                            </li>
                                            <li>
                                                {/* <a href="about.html">About</a> */}
                                                <NavLink exact to={'/About'} className='current-list-item'>About</NavLink>
                                            </li>
                                            <li>
                                                {/* <a href="cart.html">Cart</a> */}
                                                <NavLink exact to={'/Cart'} className='current-list-item'>Cart</NavLink>
                                            </li>
                                            <li>
                                                {/* <a href="checkout.html">Check Out</a> */}
                                                <NavLink exact to={'/Check Out'} className='current-list-item'>Check Out</NavLink>
                                            </li>
                                            <li>
                                                {/* <a href="contact.html">Contact</a> */}
                                                <NavLink exact to={'/Contact'} className='current-list-item'>Contact</NavLink>
                                            </li>
                                            <li>
                                                {/* <a href="news.html">News</a> */}
                                                <NavLink exact to={'/News'} className='current-list-item'>News</NavLink>
                                            </li>
                                            <li>
                                                {/* <a href="shop.html">Shop</a> */}
                                                <NavLink exact to={'/Shop'} className='current-list-item'>Shop</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        {/* <a href="news.html">News</a> */}
                                        <NavLink exact to={'/News'} className='current-list-item'>News</NavLink>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="news.html">News</a>
                                                <NavLink exact to={'/News'} className='current-list-item'>News</NavLink>
                                            </li>
                                            <li>
                                                {/* <a href="single-news.html">Single News</a> */}
                                                <NavLink exact to={'/Singlenews'} className='current-list-item'>Singlenews</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        
                                        {/* <a href="contact.html">Contact</a> */}
                                        <NavLink exact to={'/Contact'} className='current-list-item'>Contact</NavLink>
                                    </li>
                                    <li>
                                        {/* <a href="shop.html">Shop</a> */}
                                        <NavLink exact to={'/Shop'} className='current-list-item'>Shop</NavLink>
                                        <ul className="sub-menu">
                                            <li>
                                                {/* <a href="shop.html">Shop</a> */}
                                            <NavLink exact to={'/Shop'} className='current-list-item'>Shop</NavLink>
                                            </li>
                                            <li>
                                                {/* <a href="checkout.html">Check Out</a> */}
                                            <NavLink exact to={'/Checkout'} className='current-list-item'>Check Out</NavLink>
                                            </li>
                                            <li>
                                                {/* <a href="single-product.html">Single Product</a> */}
                                            <NavLink exact to={'/Singleproduct'} className='current-list-item'>Single Product</NavLink>
                                            </li>
                                            <li>
                                                {/* <a href="cart.html">Cart</a> */}
                                            <NavLink exact to={'/Cart'} className='current-list-item'>Cart</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="header-icons">
                                            <a className="shopping-cart" href="cart.html"><i className="fas fa-shopping-cart" /></a>
                                            <a className="mobile-hide search-bar-icon" href="#"><i className="fas fa-search" /></a>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                            <a className="mobile-show search-bar-icon" href="#"><i className="fas fa-search" /></a>
                            <div className="mobile-menu" />
                            {/* menu end */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Header;