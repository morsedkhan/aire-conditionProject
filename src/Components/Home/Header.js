import React from 'react';
import './Home.css'
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo1 from '../../Images/aboutLogo.png';
// import logo2 from '../../Images/logo2.png';
const Header = () => {
    return (
        <>

            {/* nav bar menu */}
            <Navbar expand="lg" style={{ backgroundColor: '#0ABEE3', padding: '20px', }} >
                <div className="container">
                   <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div style={{display: 'flex',alignItems: 'center', justifyContent:'space-between'}}>
                            <Nav className="mr-auto">
                                <li className="menu_li">
                                    <NavLink activeClassName='text-primary' to='/home' className="MenuContent">
                                        <div className="logoDesign">
                                            <img style={{ width: '76px', height: '76px' }} src={logo1} alt="logo" />
                                        </div>
                                    </NavLink>
                                </li>
                            </Nav>
                            <Nav className="mr-auto">
                                <li className="menu_li">
                                    <NavLink activeClassName='text-primary' to='/home' className="MenuContent">
                                        Home
                                </NavLink>
                                </li>
                                <li className="menu_li">
                                    <NavLink activeClassName='text-primary' to='/about' className="MenuContent">
                                        About Us
                                </NavLink>
                                </li>
                                <li className="menu_li">
                                    <NavLink activeClassName='text-primary' to='/service' className="MenuContent">
                                        Services
                                </NavLink>
                                </li>
                                <li className="menu_li">
                                    <NavLink activeClassName='text-primary' to='/gallery' className="MenuContent" >
                                        Photo Gallery
                                </NavLink>
                                </li>
                                <li className="menu_li">
                                    <NavLink activeClassName='text-primary' to='/testimonial' className="MenuContent" >
                                        Testimonials
                                </NavLink>
                                </li>
                                <li className="menu_li">
                                    <NavLink activeClassName='text-primary' to='/contact' className="MenuContent" >
                                        Contact
                                </NavLink>
                                </li>
                               
                            </Nav>
                          
                            
                        </div>
                       
                    </Navbar.Collapse>
                </div>
            </Navbar>
            
        </>
    );
};

export default Header;