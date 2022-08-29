import React from "react";
import Navbarcomp from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import{useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../Firebase';
import {useNavigate} from 'react-router-dom';
import SignIn from './SignIn';
import Signup from "./Signup";
import Reservation from './Reservation';


function Home(){

  const[user,loading,error] = useAuthState(auth)
 
 
return(
 <>
         <div class="container">
         <div class="jumbotron jumbotron-fluid">
         
        
          <div class="box">

         <h1 class="display-4"></h1>
         
          <div className="checkinout">
        
         <input  className="box1" type="date" placeholder="checkin"/>
         
         <input className="box1" type="date" placeholder="checkin"/>
         
         <select className="box1">

         <option value="">Night</option>

         <option value="Night">1</option>

         <option value="Night">2</option>

         
         </select>

         <select className="box1">

          <option value="">1Room,1Guest</option>

         <option value="1Room,1Guest">1</option>

         <option value="1Room,1Guest">2</option>

         </select>
         <button className="button">Book Now</button>

         </div>
         </div>

        </div>
        
        
      </div>
      <About/>
      <Contact/>
      <Reservation/>
     
      </>


     
    
    )

       
}
export default Home;