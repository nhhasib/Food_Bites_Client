import React from 'react';
import FoodCard from './FoodCard';

const OrderTabs = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-6 w-4/5 mx-auto my-8">
                  {
                      items.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
                  }
                  </div>
    );
};

export default OrderTabs;