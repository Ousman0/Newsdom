
import './App.css';
import React from "react";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import News from './Components/News';
import Nav from './Components/Nav';

 const App=()=> {
    return (
      <div>
      <Router>
     <Nav/> 
     <News key='Home' pageSize={12} country='in' category='sports'/>
      {/* <Routes>
      <Route exact path='/' element={<News key='Home' pageSize={12} country='in' category='sports'/>}></Route>
      <Route exact path='/Business' element={<News key='Business' pageSize={12} country='in' category='Business'/>}></Route>
      <Route exact path='/Entertainment' element={<News key='Entertainment' pageSize={12} country='in' category='Entertainment'/>}></Route>
      <Route exact path='/General' element={<News key='General' pageSize={12} country='in' category='General'/>}></Route>
      <Route exact path='/health' element={<News key='health' pageSize={12} country='in' category='health'/>}></Route>
      <Route exact path='/science' element={<News key='Science' pageSize={12} country='in' category='Science'/>}></Route>
      <Route exact path='/Sports' element={<News key='Sports' pageSize={12} country='in' category='Sports'/>}></Route>
      <Route exact path='/Technology' element={<News key='Technology' pageSize={12} country='in' category='Technology'/>}></Route>
      </Routes> */}
      </Router>
      </div>
    )
  
}

export default App;
