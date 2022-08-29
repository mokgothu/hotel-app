import React from 'react';
import {useState }  from 'react';
import {auth} from '../Firebase';
import {useNavigate} from 'react-router-dom';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import img5 from '../components/images/img5.jpg'
import img3 from '../components/images/img3.jpg'
import {next} from 'react-bootstrap/esm/PageItem';


function SignIn(){

  const navigate =useNavigate();
  
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  
 const goReg=()=>{
  navigate('/signup')
 }

  const SignIn = ()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then(auth=>{navigate('/home')})
    .catch(error=>console.error(error))
   
  }
 

  
    return(
   <div class="container">
    

      <div class="jumbotron1 jumbotron-fluid">
</div>

<div  class="signin">
<h1>SignIn form</h1><br></br>
  
  <div  class="img3">
    <div class="row">
    <div class="col-lg-6 col-sm-12 program">
 
 <img src={img3} class="rounded float-right" alt="images" style={{height:'400px', width:'380px'}}/>
 </div>
 </div>
 </div>
 <div class="col-lg-6 col-sm-12 program">
   <div class="form-row">
  
    <label for="Email1">Email address</label>
    <input onChange={(event)=>setEmail(event.target.value)} autoComplete="off" type="email" class="form-control" id="Email" aria-describedby="email"/>

    
    </div>
 

    <div class="form-row">

   <label for="Password1">Password</label>
    <input onChange={(event)=>setPassword(event.target.value)} autoComplete="off" type="password" class="form-control" id="Password1"/>
    <small id="email" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
</div>


  <button onClick={SignIn} type="submit" class="button2">Sign In</button>
  <a href="#">forgot password</a>

  <button onClick={goReg} type="submit" class="button2">Signup</button>
</div>
</div>


     


      
    )

}
  


export default SignIn;