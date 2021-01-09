import React from 'react';
import './Home.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import icon from '../../Images/i1.png';
import icon1 from '../../Images/i2.png';
import icon2 from '../../Images/i3.png';
import icon3 from '../../Images/i4.png';

const HomeIcon = () => {
    return (
        <div className="iconContent">
            <Container>
                <Row>
                    <div className="container">
                        <div className="row">
                            <Col xs={12} md={12} sm={12}>
                                <h2 style={{ fontWeight: '700', color: 'white', textAlign: 'center' }}>WE ALSO DO INSTALLATION AND SERVICE OF</h2>
                            </Col>
                           
                        </div>

                        <div className="row">
                            <Col xs={12} md={3} sm={6}>
                                <Card style= {{ border: 'none', textAlign: 'center', background: 'transparent', padding: '20px' }}>
                                    <div style={{ height: '120px' }}>
                                        <Card.Img
                                            variant="top"
                                            src={icon}
                                            className="img-fluid my-4"
                                            style={{ width: '70px', margin: 'auto' }}
                                        />
                                    </div>
                                    <Card.Title style={{ fontSize: '25px', fontWeight: '600', color: '#ffffff' }}>
                                        Water Heaters
                                </Card.Title>
                                </Card>
                            </Col>

                            <Col xs={12} md={3} sm={6}>
                                <Card style=
                                    {{ border: 'none', textAlign: 'center', background: 'transparent', padding: '20px' }}
                                >
                                    <div style={{ height: '120px' }}>
                                        <Card.Img
                                            variant="top"
                                            src={icon1}
                                            className="img-fluid my-4"
                                            style={{ width: '70px', margin: 'auto' }}
                                        />
                                    </div>
                                    <Card.Title style={{ fontSize: '25px', fontWeight: '600', color: '#ffffff' }}>
                                        Tankless Water Heaters
                                </Card.Title>
                                </Card>
                            </Col>


                            <Col xs={12} md={3} sm={6}>
                                <Card style=
                                    {{ border: 'none', textAlign: 'center', background: 'transparent', padding: '20px' }}
                                >
                                    <div style={{ height: '120px' }}>
                                        <Card.Img
                                            variant="top"
                                            src={icon2}
                                            className="img-fluid my-4"
                                            style={{ width: '70px', margin: 'auto' }}
                                        />
                                    </div>
                                    <Card.Title style={{ fontSize: '25px', fontWeight: '600', color: '#ffffff' }}>
                                        All types of Gas Lines
                                </Card.Title>
                                </Card>
                            </Col>


                            <Col xs={12} md={3} sm={6}>
                                <Card style=
                                    {{ border: 'none', textAlign: 'center', background: 'transparent', padding: '20px' }}
                                >
                                    <div style={{ height: '120px' }}>
                                        <Card.Img
                                            variant="top"
                                            src={icon3}
                                            className="img-fluid my-4"
                                            style={{ width: '70px', margin: 'auto' }}
                                        />
                                    </div>
                                    <Card.Title style={{ fontSize: '25px', fontWeight: '600', color: '#ffffff' }}>
                                        All Appliances
                                </Card.Title>
                                </Card>
                            </Col>
                        </div>
                    </div>
                </Row>
            </Container>
            
        </div>
    );
};

export default HomeIcon;