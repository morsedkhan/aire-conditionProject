import React from 'react';
import './Home.css'
import { Card, Col, Container, Row } from 'react-bootstrap';
// import { Grid,} from '@material-ui/core';


const Services = () => {
    return (
        <div className='servicesContainer' >
            <div className="container">
                <div className="row">
                    <Container>
                        <Row>
                            <Col xs={12} md={3} sm={12} className='mt-4'>
                                <Card className="pricingTableDesign">
                                    <Card.Body style={{padding:'5px'}}>
                                        <Card.Title style={{ color: '#205088', fontSize: '20px', fontWeight: '600' }}>
                                            Furnace
                                        </Card.Title>
                                        <Card.Text style={{ fontSize: '14px' }}>
                                            High-efficiency furnaces, designed to help keep your family safe and warm throughout the year.
                                      </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} sm={12} className='mt-4'>
                                <Card className="pricingTableDesign">
                                    <Card.Body style={{ padding: '5px' }}>
                                        <Card.Title style={{ color: '#205088', fontSize: '20px', fontWeight: '600' }}>
                                            Air Conditioner
                                         </Card.Title>
                                        <Card.Text style={{fontSize: '14px'}}>
                                            We provide a range of quiet, efficient, and environmentally-friendly air conditioning products at a great price.
                                     </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} sm={12} className='mt-4'>
                                <Card className="pricingTableDesign">
                                    <Card.Body style={{ padding: '5px' }}>
                                        <Card.Title style={{ color: '#205088', fontSize: '20px', fontWeight: '600' }}>
                                            Tankless Water Heaters
                                      </Card.Title>
                                        <Card.Text style={{ fontSize: '14px' }}>
                                            Get models that provide endless supply of hot water . No need for large spaces as tankless water heaters can fit
                                          </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} sm={12} className='mt-4' >
                                <Card className="pricingTableDesign">
                                    <Card.Body style={{ padding: '5px' }}>
                                        <Card.Title style={{ color: '#205088', fontSize: '20px', fontWeight: '600' }}>
                                            Water Softeners
                                        </Card.Title>
                                        <Card.Text style={{ fontSize: '14px' }}>
                                            Our team can provide full installation, as well as offer ongoing service and maintenance for your water heater.
                                      </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            
        </div>
    );
};

export default Services;
