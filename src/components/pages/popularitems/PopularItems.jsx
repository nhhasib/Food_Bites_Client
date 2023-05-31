import React, { useEffect, useState } from 'react';
import SectionHeader from '../shared/SectionHeader';
import MenuItems from '../shared/MenuItems';
import useMenu from '../../../Hooks/useMenu';

const PopularItems = () => {

    const [menu] = useMenu();

    const popular=menu.filter(item=>item.category==='popular')

    return (
        <div className='w-4/5 mx-auto'>
            <SectionHeader subheader='Check it out' header='from out menu'></SectionHeader>
            <div className='grid grid-cols-2 gap-10 w-4/5 mx-auto my-8'>
                {
                    popular.map(item=><MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
           <div className='text-center mb-10'> <button className='btn btn-primary'>View Full Menu</button></div>
        </div>
    );
};

export default PopularItems;