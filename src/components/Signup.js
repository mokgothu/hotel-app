import React from 'react'
import { useState } from 'react';
import {auth} from '../Firebase';
import {useNavigate} from 'react-router-dom';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import SignIn from './SignIn';
import img3 from '../components/images/img3.jpg';
import {click} from '@testing-library/user-event/dist/click';

 function Signup(){

  const navigate =useNavigate();
  
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
 



    const Reg = ()=> {
        alert('click')
        createUserWithEmailAndPassword(auth,email,password)
        .then(auth=>{navigate('/')})
        .catch(error=>console.error(error))
    }

    return(

<div class="container">
    

    <div class="jumbotron1 jumbotron-fluid">
</div>

<div  class="signin">
<h1>Sign Up form</h1><br></br>

<div  class="img3">
  <div class="row">
  <div class="col-lg-6 col-sm-12 program">

<img src={img3} class="rounded float-right" alt="images" style={{height:'400px', width:'380px'}}/>
</div>
</div>
</div>
<div class="col-lg-6 col-sm-12 program">
 <div class="form-row">

  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="First name"><b>First name</b></label>
      <input  type="text" placeholder='First name' name="first name" required/>
    </div>
    </div>
    <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="Last name"><b>Last name</b></label>
      <input  type="text" placeholder='Last name' name="last name" required/>
    </div>
    </div>

  <div class="form-row">
    <div class="col-md-6 mb-3"> 

    <label for="Email1"><b>Email address</b></label>
  <input  type="text" placeholder="Enter Email"name="Email" required/>
  </div>

  <div class="form-row">
    <div class="col-md-6 mb-3"> 
    <label for="password"><b>Password</b></label>
   <input  type="text" placeholder="password" name="password" required/>
   </div>
   <br/>

 <div class="form-row">
 <div class="col-md-6 mb-3">
 <label for="Password1"><b>Confirm Password</b></label>
 <input onChange={(event)=>setEmail(event.target.value)} autoComplete="off" type="text"  class="form-control" id="Password1" />
 </div>
 </div>
 
 

     <button onClick={Reg} type="signup" className="button">Sign Up</button>
        </div>
    </div>

    </div>
   </div>
    </div>
   </div>
 
    )

     


    
}

export default Signup;