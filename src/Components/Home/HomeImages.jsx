import React from 'react';
import './Home.css'
import { Card } from 'react-bootstrap';
import thumbs from '../../Images/thumbs.png';
import thumbs1 from '../../Images/thumbs-2.png';
import thumbs2 from '../../Images/thumbs-3.png';
import thumbs3 from '../../Images/thumbs-4.png'
import { Col, Container, Row } from 'react-bootstrap';


const HomeImages = () => {
    return (
        <>
            <div className="homeImage">
                <h1 style={{ textAlign: 'center' }}>Our services template</h1>
                <p style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</p>
                <br/>
                <Container>
                    <Row>
                        <Col xs={12} md={3} sm={6}>
                            <Card className="pricingTableDesign">
                                <Card style={{ border: 'none' }}>
                                    <Card.Img variant="top" style={{ width: '100%' }} src={thumbs} className="img-fluid" />
                                </Card>
                            </Card>
                        </Col>
                        <Col xs={12} md={3} sm={6}>
                            <Card className="pricingTableDesign">
                                <Card style={{ border: 'none' }}>
                                    <Card.Img variant="top" style={{ width: '100%' }} src={thumbs1} className="img-fluid" />
                                </Card>
                            </Card>
                        </Col>
                        <Col xs={12} md={3} sm={6}>
                            <Card className="pricingTableDesign">
                                <Card style={{ border: 'none' }}>
                                    <Card.Img variant="top" style={{ width: '100%' }} src={thumbs2} className="img-fluid" />
                                </Card>
                            </Card>
                        </Col>
                        <Col xs={12} md={3} sm={6}>
                            <Card className="pricingTableDesign">
                                <Card style={{ border: 'none' }}>
                                    <Card.Img variant="top" style={{ width: '100%' }} src={thumbs3} className="img-fluid" />
                                </Card>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>


            {/* <div style={{width : '1170px', margin : 'auto', padding : '50px 0'}}>
                <div className='row'>
                    <div className='col-md-3'>
                        <div>
                            <Card style={{border : 'none'}}>
                                <Card.Img variant="top" style={{ width: '100%' }} src={thumbs} className="img-fluid"/>
                            </Card>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div>
                            <Card style={{border : 'none'}}>
                                <Card.Img variant="top" style={{ width: '100%' }} src={thumbs1} className="img-fluid"/>
                            </Card>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div>
                            <Card style={{border : 'none'}}>
                                <Card.Img variant="top" style={{ width: '100%' }} src={thumbs2} className="img-fluid"/>
                            </Card>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div>
                            <Card style={{border : 'none'}}>
                                <Card.Img variant="top" style={{width: '100%'}} src={thumbs3} className="img-fluid"/>
                            </Card>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default HomeImages;