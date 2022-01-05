import React from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import {Routes} from 'react-router-dom'
import Home from './Home';
import DynamicPage from './DynamicPage';
import NoMatch from './NoMatch';

const App = () => {
  return (
    <Router>
      
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/dynamic" element={<DynamicPage/>} />
          <Route element={NoMatch} />
        </Routes>
      
    </Router>
    
  );
};

export default App;