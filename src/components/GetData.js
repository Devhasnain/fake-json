import React from 'react';
import { NavLink } from 'react-router-dom';

function GetData() {
  let api = 'https://jsonplaceholder.typicode.com/';
  const api1 = 'https://dummyjson.com/';
  const api2='https://fakestoreapi.com/';
  let arr = ['posts', 'comments', 'albums', 'photos', 'todo', 'users'];
  const arr1 = ['products','carts','users	','posts	','comments	','quotes	','  todos'];
  const arr2=['products','carts','users'];

  return (
    <>
      <div className='container'>
        <div className='row my-5 text-center'>
          <h2 className=''>Fake Json</h2>
          <hr />
          <small>Select what type of data you want.</small>
          <br/>
          <br/>
          <div className='col-7 m-auto'>
            {getData(api, arr)}
            {getData(api1, arr1)}
            {getData(api2, arr2)}
          </div>
          <div className='my-4' >
          <NavLink to='/' className='btn btn-warning'>Back</NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default GetData;

const getData = (key, arry) => {
  const x = [];
  for (let i = 0; i < arry.length; i++) {
    x.push(<a className='btn btn-warning mx-3 my-3' key={i} href={`${key}${arry[i]}`} rel="noreferrer" target='_blank' >{arry[i]}</a>)
  };
  return x
}