import React from 'react';
import SectionHeader from '../../shared/SectionHeader';
import img from '../../../../assets/home/featured.jpg';
import './Menubanner.css'
import { Link } from 'react-router-dom';

const Menubanner = () => {
    return (
        <div className='w-4/5 mx-auto mb-12 bg-fixed menubanner p-10 text-white'>
            <SectionHeader subheader='Check it out' header='From Our Menu'></SectionHeader>
            <div className='flex justify-center items-center gap-6'>
                <div><img src={img} alt="" /></div>
                <div>
                    <h1>May 29,2023</h1>
                    <h1 className='uppercase'>Where can I get some?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure assumenda officia atque porro esse aspernatur expedita ad perspiciatis, fuga voluptatum, itaque asperiores molestiae, odio ut autem eveniet exercitationem delectus nobis voluptatem veritatis. Ipsa est esse laudantium, corrupti quisquam deleniti eaque dolores molestiae aspernatur, cumque, nam temporibus perferendis voluptates nihil maxime!</p>
                <button className='btn btn-outline border-0 border-b-4 mt-4 text-white'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Menubanner;