import React from 'react';
import Banner from './Banner';
import Slider from './Slider';
import PopularItems from '../popularitems/PopularItems';
import Menubanner from './Menubanner/Menubanner';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';
import Recommended from './Recommended';

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Food Bites | Home</title>
      </Helmet>
            <Banner></Banner>
            <Slider></Slider>
            <PopularItems></PopularItems>
            <Recommended></Recommended>
            <Menubanner></Menubanner>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;