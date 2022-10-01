import React, { useState } from 'react';

function Json() {
    const [state,setState]=useState('copy')
    const apis=[
        'https://jsonplaceholder.typicode.com/posts',
        'https://jsonplaceholder.typicode.com/comments',
        'https://jsonplaceholder.typicode.com/albums',
        'https://jsonplaceholder.typicode.com/photos',
        'https://jsonplaceholder.typicode.com/todos',
        'https://jsonplaceholder.typicode.com/users'
    ]
    const HandleCopy=(e)=>{
        navigator.clipboard.writeText(apis[e.target.value]);
        setState('copied');
        setTimeout(() => {
            setState('copy')
        }, 2500);
    }
  return (
    <>
    <div className='row p-2'>
        <ul className='p-0 apis-ul'>
            {apis.map((item,index)=>{
                return (
                    <li key={index} className='p-3 bg-dark my-1 shadow rounded justify-content-between align-items-center'>{item}<button className='copy-btn btn-sm p-0' value={index}  onClick={HandleCopy}>{state}</button></li>
                )
            })}
        </ul>
    </div>
    </>
  )
}

export default Json;
