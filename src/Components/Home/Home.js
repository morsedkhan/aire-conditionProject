import React from 'react';
import Footer from './Footer';
import Header from './Header';
import HomeIcon from './HomeIcon';
import HomeImages from './HomeImages';
import HomeLoge from './HomeLoge';
import HomeSlider from './HomeSlider';
import RatingSection from './RatingSection';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Header />
            <HomeSlider />
            <Services />
            <HomeImages />
            <HomeIcon />           
            <div>
                <HomeLoge />
            </div>
            <RatingSection />
            <Footer />
            
        </div>
    );
};

export default Home;