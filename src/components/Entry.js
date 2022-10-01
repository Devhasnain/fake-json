import React from 'react';
import Main from './Main'
import {BrowserRouter as Router} from 'react-router-dom';

const Entry = () => {
  return (
      <Router>
      <Main/>
      </Router>
  )
}

export default Entry;