import React from 'react';
import { FaFacebookSquare, FaYoutube, FaWhatsapp, FaLinkedin, FaRegAddressCard, FaPhone } from "react-icons/fa";
import './Home.css'

const Footer = () => {
    return (
        <div>
            <section id="footer" className="footer">
                <div className="footerBg"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className="contact-form btm-brdr">
                                <div className="form-Box">
                                    <input type="text" placeholder="Name" className="b_effect" />
                                </div>
                                <div className="form-Box">
                                    <input type="text" placeholder="Email" className="b_effect" />
                                </div>
                                <div className="form-Box">                   
                                   <textarea placeholder="Message" className="b_effect"></textarea>
                                </div>
                                <div className="form-Box" >
                                    <input type="submit" value="Submit" className="fill-btn" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className="contact-address btm-brdr">
                                <h4 className="fTitle"> Contact <span>Us</span> </h4>
                                <ul>
                                    <li style={{ color: '#fff', listStyle: 'none' }}> <i className="fa fa-phone" aria-hidden="true"></i> <span >  <FaPhone  style={{marginRight:'10px', fontSize:'22px'}}/>1800 999 87 21</span> </li>
                                    <li style={{ color: '#fff', listStyle: 'none' }}> <i className="fa fa-map-marker" aria-hidden="true"></i> <span ><FaRegAddressCard  style={{ marginRight: '10px', fontSize: '22px' }} />121 Abc St, Cumilla VIC 5000, Bangladesh</span> </li>
                                    <li style={{ color: '#fff', listStyle: 'none' }}><i className="fa fa-envelope-o" aria-hidden="true"></i><span >Info.morshad@gmail.com</span> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className="subscribe btm-brdr">
                                <h4 className="fTitle"> Subscribe <span>Newsletter</span> </h4>
                                <form>
                                    <input type="text" placeholder="Example@example.com" />                               
                                     <button type="button" className="fill-btn">Subscribe</button>
                                </form>
                            </div>
                            <div className="social-icons">
                                <h4 className="fTitle"> Social <span>News</span> </h4>
                                <ul>
                                    {/* <li> <a href="'#" target="_blank"> <img src={fblogo} style={{width:'38px', height:'38px'}} alt=""/> </a></li>
                                    <li> <a href="'#" target="_blank"> <img src={youtube} style={{width:'38px', height:'38px'}} alt=""/> </a></li> */}
                                   
                                    <li> <a href="'#" target="_blank">  <FaFacebookSquare /></a></li>
                                    <li><a href="'#" target="_blank"> <FaYoutube /> </a></li>
                                    <li><a href="'#" target="_blank"> <FaWhatsapp /> </a></li>
                                    <li><a href="'#" target="_blank">  <FaLinkedin  /> </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="copyright" className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h6> © 2020 This theme is powered by <a href="http://scanfcode.com" target="_blank">Morshad Khan.</a> </h6>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;
