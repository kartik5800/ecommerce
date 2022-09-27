import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div>
            <div className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-box about-widget">
                                <h2 className="widget-title">About us</h2>
                                <p>Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-box get-in-touch">
                                <h2 className="widget-title">Get in Touch</h2>
                                <ul>
                                    <li>34/8, East Hukupara, Gifirtok, Sadan.</li>
                                    <li>support@fruitkha.com</li>
                                    <li>+00 111 222 3333</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-box pages">
                                <h2 className="widget-title">Pages</h2>
                                <ul>
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li><Link to={"/About"}>About</Link></li>
                                    <li><Link to={"/Shop"}>Shop</Link></li>
                                    <li><Link to={"/News"}>News</Link></li>
                                    <li><Link to={"/Contact"}>Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            {/* end footer */}
            {/* copyright */}
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <p>Copyrights © 2019 - <a href="https://imransdesign.com/">Imran Hossain</a>,  All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-6 text-right col-md-12">
                            <div className="social-icons">
                                <ul>
                                    <li><a href="#" target="_blank"><i className="fab fa-facebook-f" /></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-twitter" /></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-instagram" /></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-linkedin" /></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-dribbble" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Footer;