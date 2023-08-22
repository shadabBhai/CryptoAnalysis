import React from 'react';
import {BrowserRouter as Router ,Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import CoinsDetails from "./components/CoinsDetails";
import Coins from './components/Coins';
import Exchanges from "./components/Exchanges"


const App = () => {
  return (
    <Router>
      <Header/> 
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/coins" element={<Coins/>}/>
       <Route path="/coins/:id" element={<CoinsDetails/>}/>
       <Route path="/exchange" element={<Exchanges/>}/>
      </Routes>
    </Router>

  )
}

export default App