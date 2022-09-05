import React from 'react';

function Contact(props) {
    return (
        <div>
            <div className="search-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="close-btn"><i className="fas fa-window-close" /></span>
                            <div className="search-bar">
                                <div className="search-bar-tablecell">
                                    <h3>Search For:</h3>
                                    <input type="text" placeholder="Keywords" />
                                    <button type="submit">Search <i className="fas fa-search" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end search arewa */}
            {/* breadcrumb-section */}
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>Get 24/7 Support</p>
                                <h1>Contact us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end breadcrumb section */}
            {/* contact form */}
            <div className="contact-from-section mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-5 mb-lg-0">
                            <div className="form-title">
                                <h2>Have you any question?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ratione! Laboriosam est, assumenda. Perferendis, quo alias quaerat aliquid. Corporis ipsum minus voluptate? Dolore, esse natus!</p>
                            </div>
                            <div id="form_status" />
                            <div className="contact-form">
                                <form type="POST" id="fruitkha-contact" onsubmit="return valid_datas( this );">
                                    <p>
                                        <input type="text" placeholder="Name" name="name" id="name" />
                                        <input type="email" placeholder="Email" name="email" id="email" />
                                    </p>
                                    <p>
                                        <input type="tel" placeholder="Phone" name="phone" id="phone" />
                                        <input type="text" placeholder="Subject" name="subject" id="subject" />
                                    </p>
                                    <p><textarea name="message" id="message" cols={30} rows={10} placeholder="Message" defaultValue={""} /></p>
                                    <input type="hidden" name="token" defaultValue="FsWga4&@f6aw" />
                                    <p><input type="submit" defaultValue="Submit" /></p>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-form-wrap">
                                <div className="contact-form-box">
                                    <h4><i className="fas fa-map" /> Shop Address</h4>
                                    <p>40/41 royal plazza <br /> jakatnaka, surat. <br /> India</p>
                                </div>
                                <div className="contact-form-box">
                                    <h4><i className="far fa-clock" /> Shop Hours</h4>
                                    <p>MON - FRIDAY: 8 to 9 PM <br /> SAT - SUN: 10 to 5 PM </p>
                                </div>
                                <div className="contact-form-box">
                                    <h4><i className="fas fa-address-book" /> Contact</h4>
                                    <p>Phone: +01 971 179 88888 <br /> Email: support@ElectroHub.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end contact form */}
            {/* find our location */}
            <div className="find-location blue-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <p> <i className="fas fa-map-marker-alt" /> Find Our Location</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* end find our location */}
            {/* google map section */}
            <div className="embed-responsive embed-responsive-21by9">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.3272240434553!2d72.89455075100012!3d21.218868985826468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ffc5141a629%3A0x4bed3e688814ca3a!2sRoyal%20Plaza%20Compound%20(Bhumi%20Corporation)!5e0!3m2!1sen!2sin!4v1662140819198!5m2!1sen!2sin" width={600} height={450} frameBorder={0} style={{ border: 0 }} allowFullScreen className="embed-responsive-item" />
            </div>
        </div>

    );
}

export default Contact;

