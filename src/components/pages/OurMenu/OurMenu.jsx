import React from 'react';
import img from '../../../assets/menu/banner3.jpg'
import SectionHeader from '../shared/SectionHeader';
import MenuItems from '../shared/MenuItems';
import useMenu from '../../../Hooks/useMenu';
import imgDesert from '../../../assets/menu/dessert-bg.jpeg'
import imgPizza from '../../../assets/menu/pizza-bg.jpg'
import imgSalads from '../../../assets/menu/salad-bg.jpg'
import imgSoups from '../../../assets/menu/soup-bg.jpg'
import { Helmet } from 'react-helmet-async';
import MenuCategory from '../MenuCategory/MenuCategory';
import MenuHeaderBanner from '../shared/MenuHeaderBanner';

const OurMenu = () => {
    const [menu] = useMenu();
    const offer = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salads = menu.filter(item => item.category === 'salad')
    const soups=menu.filter(item=>item.category==='soup')
    const drinks=menu.filter(item=>item.category==='drinks')

    return (
        <div>
            <Helmet>
        <title>Food Bites | Our menu</title>
      </Helmet>
            <MenuHeaderBanner img={img} title='Our Menu' text='text-5xl'></MenuHeaderBanner>
            <SectionHeader subheader="Don't miss" header="Today's Offer"></SectionHeader>
            <div className='grid grid-cols-2 gap-10 w-4/5 mx-auto my-12'>
            {
                offer.map(item=><MenuItems  key={item._id} item={item}></MenuItems>)
                }
            </div>
            <MenuCategory img={imgDesert} title={'dessert'} text={'text-2xl'} items={dessert}></MenuCategory>
           <MenuCategory img={imgPizza} title={'pizza'} text={'text-2xl'} items={pizza}></MenuCategory>
            <MenuCategory img={imgSalads} title={'salads'} text={'text-2xl'} items={salads}></MenuCategory>
            <MenuCategory img={imgSoups} title={'soups'} text={'text-2xl'} items={soups}></MenuCategory>
            <MenuCategory img={imgSoups} title={'drinks'} text={'text-2xl'} items={drinks}></MenuCategory>
            
        </div>
    );
};

export default OurMenu;