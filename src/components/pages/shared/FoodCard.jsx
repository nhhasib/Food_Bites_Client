import React from 'react';

const FoodCard = ({item}) => {
    return (
        
            <div className="card bg-base-100 shadow-xl">
            <figure><img className='w-full' src={item.image} alt="Shoes" /></figure>
            <p className='bg-black bg-opacity-50 p-2 rounded-xl text-white absolute'>$ { item.price}</p>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-center">{item.name}</h2>
     <p>{ item.recipe}</p>
    <div className="card-actions justify-end">
                    <button className='btn btn-outline bg-slate-100 border-orange-800 border-0 border-b-4 mt-4'>Order Now</button>
    </div>
  </div>
</div>
       
    );
};

export default FoodCard;