import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import GetData from './GetData';
import Home from './Home';
import { AnimatePresence } from 'framer-motion';
import Apis from './Pages/Apis';
import Json from './SubPages/Json';
import Dummy from './SubPages/Dummy';
import Fake from './SubPages/Fake';
import Sample from './SubPages/Sample';
function Main() {
    const location = useLocation()
    return (
        <>
            <div className='container-fluid main-div'>
                <AnimatePresence mode='wait'>
                    <Routes location={location} key={location.key}>
                        <Route path='/' element={<Home />} />
                        <Route path='/get-apis' element={<Apis/>}>
                            <Route path='/get-apis' element={<Json/>}/>
                            <Route path='/get-apis/dummy-json' element={<Dummy/>}/>
                            <Route path='/get-apis/fake-api-store' element={<Fake/>}/>
                            <Route path='/get-apis/dummy-sample' element={<Sample/>}/>
                        </Route>
                        <Route path='/get-json-data' element={<GetData />} />
                    </Routes>
                </AnimatePresence>
            </div>
        </>
    );
};

export default Main;
