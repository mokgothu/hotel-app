import React, {useEffect, useState} from 'react';
import {db} from '../Firebase';
import {addDoc , collection} from 'firebase/firestore';


 function Reservation (){
 const [firstname, setfirstname]=useState("")
 const [lastname, setLasttname]=useState("")
  const[child,setChild]=useState("");
  const[adult,setAdult]=useState("");
  const [roomtype, setRoomtype]=useState("")
  const[checkin,setcheckin]=useState("")
  const[checkout,setcheckout]=useState("")
  const[discounttype, setDiscounttype]=useState("")
  const[advancepayment, setAdvancepayment]=useState("")

   const Reservation= (()=>{
   const collectionRef = collection(db, "Reservation");

   const Reservation={
    firstname:firstname,
    lastname:lastname,
    child:child,
    adult:adult,
    roomtype: roomtype,
    checkin:checkin,
    checkout:checkout,
    discounttype:discounttype,
    advancepayment:advancepayment,
   };
   addDoc(collectionRef, Reservation).then(()=>{
   alert("Added successfully")
   }).catch((err)=>{
     console.log(err);
   })
  } )
   
    return(

      
     
     <div class="container">
    

      <div class="jumbotron1 jumbotron-fluid">
</div>
<form>
  <div class="form-row">
    <div class="col">
      <label for="inputEmail">Email</label>
      <input type="email" class="form-control" id="inputEmail"/>
    </div>

    <div class="col">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4"/>
    </div>
  </div>

  <div class="form">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="form">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="form">
    <div class="col">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="col">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="col">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>

  <div class="form-group col-md-2">
  
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck"> Check in</label><br></br>
        <input class="form-check-output" type="checkbox" id="gridcheck"/>
        <label class="form-check-label" for="gridcheck"></label>
       

   
  </div>

  <button type="submit" class="btn btn-primary">Sign in</button>
</form>



      </div>
    )
}

export default Reservation;