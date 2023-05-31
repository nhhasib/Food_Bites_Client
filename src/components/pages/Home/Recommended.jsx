import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import FoodCard from '../shared/FoodCard';
import useMenu from '../../../Hooks/useMenu';

const Recommended = () => {
    const [menu] = useMenu()
    const offered=menu.filter(item=>item.category==='offered')
    return (
        <div>
            <SectionHeader subheader={'should try'} header={'chef recommends'}></SectionHeader>
            <div className='grid grid-cols-4 gap-6 w-4/5 my-8 mx-auto'>
                {
                    offered.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default Recommended;