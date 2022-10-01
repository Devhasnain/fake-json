import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Apis() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <h1 className='text-center'>Api Keys</h1>
                    <hr />
                    <div className='col-3 border-end sub-links-apis'>
                        <ul>
                            <li><NavLink to='/get-apis'>Json Placeholder</NavLink></li>
                            <li><NavLink to='/get-apis/dummy-json'>Dummy Json</NavLink></li>
                            <li><NavLink to='/get-apis/fake-api-store'>Fake Store Api</NavLink></li>
                            <li><NavLink to='/get-apis/dummy-sample'>Dummy</NavLink></li>
                            <li><NavLink to='/'>Back</NavLink></li>
                        </ul>
                    </div>
                    <div className='col mx-2'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Apis;
