import React from 'react'
import { useState } from 'react'
import axios from 'axios';
function Paypalpage() {

      const [email, setemail] = useState('');
      const [price, setprice] = useState('');
      const [product, setproduct] = useState('');

      const handlepay = async() => {
           const res = await axios.post('http://localhost:5000/api/order',{email,price,product});
           console.log(res);
      }

  return (
    <div className='mt-32'>
       <form onClick={handlepay}>
           <input type="text" placeholder='email' onClick={(e)=>{setemail(e.target.value)}}/>
           <input type='text' placeholder='price ' onClick={(e)=>{setprice(e.target.value)}}/>
           <input type="text" placeholder='product' onClick={(e)=>{setproduct(e.target.value)}}/>
           <button>pay</button>
       </form>
    </div>
  )
}

export default Paypalpage