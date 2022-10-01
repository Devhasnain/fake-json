import React, { useState }  from 'react';

function Fake() {
    const [state,setState]=useState('copy');
    const apis=[
        'https://fakestoreapi.com/products',
        'https://fakestoreapi.com/carts',
        'https://fakestoreapi.com/users'
    ]
    const HandleCopy=(e)=>{
        navigator.clipboard.writeText(apis[e.target.value]);
        setState('copied');
        setTimeout(() => {
            setState('copy')
        }, 2500);
    }
  return (
    <div className='row p-2'>
        <ul className='p-0 apis-ul'>
            {apis.map((item,index)=>{
                return (
                    <li key={index} className='p-3 bg-dark my-1 shadow rounded justify-content-between align-items-center'>{item}<button className='copy-btn btn-sm p-0' value={index} id={`${index.toString()}`}  onClick={HandleCopy}>{state}</button></li>
                )
            })}
        </ul>
    </div>
  )
}

export default Fake
