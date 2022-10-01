import React, { useState } from 'react'

function Dummy() {
    const [state,setState]=useState('copy')
    const apis=[
        'https://dummyjson.com/products',
        'https://dummyjson.com/carts',
        'https://dummyjson.com/users',
        'https://dummyjson.com/posts',
        'https://dummyjson.com/comments',
        'https://dummyjson.com/quotes',
        'https://dummyjson.com/todos'
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
                <li key={index} className='p-3 bg-dark my-1 shadow rounded justify-content-between align-items-center'>{item}<button className='copy-btn btn-sm p-0' value={index}  onClick={HandleCopy}>{state}</button></li>
            )
        })}
    </ul>
</div>
  )
}

export default Dummy
