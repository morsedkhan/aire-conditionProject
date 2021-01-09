import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Home.css';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";


// import logo2 from "../../Images/kk.jpg";
// import logo3 from "../../Images/logos6.jpg";
// import logo4 from "../../Images/logos7.jpg";


const RatingSection = () => {
    return (
        <>
            <div style={{ padding: '40px', backgroundColor: '#0ABEE3',}} >
                   {/* <div style={{textAlign: 'center'}}>
                      <h1>CLIENT TESTIMONIALS</h1>
                        <p style={{fontSize:'20px'}}>“The whole team was very professional, friendly and courteous, highly recommend, thanks!”</p>
                    </div> */}
                        <br/>
                    <Container>
                        <Row> 

                        <div className="testimonials">
                            <div className="testimonial-inner">
                                <div style={{ textAlign: 'center' }}>
                                    <h1>CLIENT TESTIMONIALS</h1>
                                    <p style={{ fontSize: '20px' }}>“The whole team was very professional, friendly and courteous, highly recommend, thanks!”</p>
                                </div>
                                {/* <div className="border"></div> */}

                                <div className="row">
                                    <div className="col">
                                        <div className="testimonial">
                                            <img src="https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                                            <div className="name">John Waddrob</div>
                                            <div className="stars">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />

                                               
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur temporibus assumenda sint odio minima. Voluptate alias possimus aspernatur voluptates excepturi placeat iusto cupiditate.</p>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="testimonial">
                                            <img src="https://images.pexels.com/photos/3585325/pexels-photo-3585325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                                            <div className="name">John Waddrob</div>
                                            <div className="stars">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur temporibus assumenda sint odio minima. Voluptate alias possimus aspernatur voluptates excepturi placeat iusto cupiditate.</p>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="testimonial">
                                            <img src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                                            <div className="name">John Waddrob</div>
                                            <div className="stars">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStarHalfAlt />
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur temporibus assumenda sint odio minima. Voluptate alias possimus aspernatur voluptates excepturi placeat iusto cupiditate!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                           {/* <Col xs={6} md={2} />
                            <Col xs={6} md={3}>
                                <Image src={logo2} style={{width:'150px', height:'142px'}} roundedCircle />
                            </Col>
                            <Col xs={6} md={3}>
                            <Image src={logo3} style={{ width: '150px', height: '142px' }} roundedCircle />
                            </Col>
                            <Col xs={6} md={3}>
                            <Image src={logo4} style={{ width: '150px', height: '142px' }} roundedCircle />
                            </Col>
                            <Col xs={6} md={1} /> */}
                        </Row>
                    </Container>
             </div>
           
        </>
    );
};

export default RatingSection;


