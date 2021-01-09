import React from 'react';
import './Home.css';
import { Card } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo from "../../Images/logo2.jpg";
import logo1 from "../../Images/logo3.jpg";
import logo2 from "../../Images/logos5.jpg";
import logo3 from "../../Images/logos6.jpg";
import logo4 from "../../Images/logos7.jpg";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};
const HomeLoge = () => {
    return (
        <div className="homeLogoDesign">
          <br/>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <hr style={{ width: '22%', height: '3px', backgroundColor:'#48DBFC'}}/>
               <h3 style={{ textAlign: 'center' }}>Companies We Deal</h3>
            <hr style={{ width: '22%', height: '3px', backgroundColor: '#48DBFC' }} />
          </div>
          <br/>
          <br/>
            <Carousel 
                responsive={responsive}
               >
                <Card className ='mx-3'>
                    <Card.Img variant="top" src={logo} className="img-fluid" style={{width:'100%', height:'auto'}}/>
                </Card>
                <Card className ='mx-3' >
                    <Card.Img variant="top" src={logo1} className="img-fluid" style={{width:'100%', height:'auto'}}/>
                </Card>
                <Card className ='mx-3'>
                    <Card.Img variant="top" src={logo2} className="img-fluid" style={{width:'100%', height:'auto'}}/>
                </Card>
                <Card className ='mx-3' >
                    <Card.Img variant="top" src={logo3} className="img-fluid" style={{width:'100%', height:'auto'}}/>
                </Card>
                <Card className ='mx-3'>
                    <Card.Img variant="top" src={logo4} className="img-fluid" style={{width:'100%', height:'auto'}}/>
                </Card>
            </Carousel>
        </div>
    );
};

export default HomeLoge;