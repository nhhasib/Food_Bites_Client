import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/Authprovider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../Hooks/useCart';

const FoodCard = ({ item }) => {
  const { name,image,price,recipe,_id} = item;
  const { user } = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const [,refetch]=useCart()

  const handleOrder = item => { 
    console.log(item)
    if (user && user.email) {
      const orderItem={menuItemId:_id,name,image,price,recipe,email:user.email}
      fetch('http://localhost:5000/carts', {
        method: 'POST',
        headers: {
          'content-type':'application/json'
      },
        body:JSON.stringify(orderItem)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'Food added in the cart',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
    }
    else {
      Swal.fire({
        title: 'Please login to order the food',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login',{state:{from:location}})
        }
      })
    }
      
  }
    return (
        
            <div className="card bg-base-100 shadow-xl">
            <figure><img className='w-full' src={item.image} alt="Shoes" /></figure>
            <p className='bg-black bg-opacity-50 p-2 rounded-xl text-white absolute'>$ { item.price}</p>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-center">{item.name}</h2>
     <p>{ item.recipe}</p>
    <div className="card-actions justify-end">
                    <button onClick={()=>handleOrder(item)} className='btn btn-outline bg-slate-100 border-orange-800 border-0 border-b-4 mt-4'>Order Now</button>
    </div>
  </div>
</div>
       
    );
};

export default FoodCard;