import React from 'react'
import phone from '../components/images/phone.png';
import email from '../components/images/email.png';
function Contact (){
    return(
         
        <div class="container" > 
      <h4>Contact us</h4>

      

 
    <div class="form-popup" id="myForm">

    <p class="Address">
      16 bangie suburb
      kimberley CBD
      8301
        <img src={phone} class="card-img-top" alt="images"/> 
        <img src={email} class="card-img-top" alt="images"/> 
        </p>
     
       
    
    <form action="/action_page.php" class="form-container">

    <label for="first name"><b>First Name</b></label>
    <input type="text" placeholder="first name" name="first name" required/><br/>

    <label for="Last Name"><b>Last Name</b></label>
    <input type="text" placeholder="Last Name" name="Last Name" required/><br/>

 
    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required/><br/>

   

    </form>

   </div>
   </div>

 
    );
   }

   export default Contact ;




