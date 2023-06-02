import React from 'react';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useCart from '../../../Hooks/useCart';

const MyCartRow = ({ item,index,refetch }) => {
    const { _id, name, image, price } = item;
    
    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
              if (result.isConfirmed) {
                  fetch(`http://localhost:5000/carts/${item._id}`, {
                      method:'DELETE'
                  })
                      .then(res => res.json())
                      .then(result => {
                          console.log(result)
                          if (result.deletedCount > 0) {
                              refetch()
                              Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                      }
                  })
            }
          })
    }
    return (
        <tr>
        <td>
          {index+1}
        </td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          </div>
        </td>
        <td>
          {name}
          
        </td>
            <td>$ {price}</td>
        <th>
          <button onClick={()=>handleDelete(item)} className="btn btn-ghost text-xl bg-red-600 text-white"><FaTrash></FaTrash></button>
        </th>
        </tr>
    );
};

export default MyCartRow;