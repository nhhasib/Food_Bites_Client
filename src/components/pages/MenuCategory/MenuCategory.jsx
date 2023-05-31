import React from 'react';
import MenuItems from '../shared/MenuItems';

import { Link } from 'react-router-dom';
import MenuHeaderBanner from '../shared/MenuHeaderBanner';

const MenuCategory = ({img,title,text,items}) => {
    return (
        <div className='my-10'>
            <MenuHeaderBanner img={img} title={title} text={text}></MenuHeaderBanner>
            <div className='grid grid-cols-2 gap-10 w-4/5 mx-auto my-8'>
                {
                    items.map(item=><MenuItems item={item} key={item._id}></MenuItems>)
                }
            </div>
            <div className='w-full mx-auto'>
            <Link to={`/order/${title}`}><button className=' btn btn-outline border-0 border-b-4 mt-4'>Order Now</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;