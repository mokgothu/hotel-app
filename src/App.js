
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Reservation from './components/Reservation';
import React,{useState, useEffect} from 'react';
import './App.css';






 function App() {
  
  useEffect(()=>{
  
  })
  
  return (

  <div className="App">

 <Routes>
  
  <Route path="/home" element={<Home/>} />
  <Route path="/reservation" element={<Reservation/>}/>
  <Route path="/" element={<SignIn />} />
  <Route path="signup" element={<Signup/>}/>
 
 </Routes>

  
  

</div>

  );
  
  
 }

 export default App;
