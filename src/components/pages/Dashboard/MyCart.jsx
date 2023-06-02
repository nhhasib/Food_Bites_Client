import React from 'react';
import useCart from '../../../Hooks/useCart';
import MyCartRow from './MyCartRow';

const MyCart = () => {
    const [cart,refetch] = useCart();
    const totalPrice=cart.reduce((sum,item)=>item.price+sum,0).toFixed(2)
    return (
        <div className='h-full mt-28'>
            <div className='flex gap-6 my-4 items-center justify-center'>
            <h1 className='text-3xl'>Total items:{ cart.length}</h1>
                <h1 className='text-3xl'>Total Price:{totalPrice}</h1>
                <button className='btn bg-[#D1A054]'>Pay</button>
            </div>
            <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Food Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
                        
                        {cart.map((i,index) => <MyCartRow key={i._id} item={i} index={index} refetch={refetch}></MyCartRow>)}
         
          </tbody>
        </table>
            
            </div>
        </div>
        
    );
};

export default MyCart;