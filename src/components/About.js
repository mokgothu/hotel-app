import React, {components} from 'react'
import CardGroup from 'react-bootstrap/CardGroup';
import img7 from '../components/images/img7.jpg';
import img2 from '../components/images/img2.jpg';
import img4 from '../components/images/img4.jpg';
import img6 from '../components/images/img6.jpg';
import stars from '../components/images/stars.png';
import img9 from '../components/images/img9.png';
import img11 from '../components/images/img11.png';
import img10 from '../components/images/img10.png';
import img12 from '../components/images/img12.png';

 function About(){
 return(
        

      <div class="container">


     <div className='content'>
      
     <h1 >Welcome to fifi's Hotel <img src={stars} className="stars" alt="..."/>  
     <img src={stars} className="stars" alt="..."/>  
     <img src={stars} className="stars" alt="..."/> 
     <img src={stars} className="stars" alt="..."/>     </h1>
    

      <h5 style={{position:'center'}}>Each and everyone experiences all kinds of vibes with our hotel and everyone has a chance for better survival.
      All we can say the hotel was established to make sure our clients experience unique of our city and our modern hotel.</h5>

     
      </div>
      <div class="card-group">
     <div class="card">
     <img src={img7} class="card-img-top" alt="..."/>
     <div class="card-body">
     <h5>Double bed</h5>
      <h5 className='cardtitle'>Facilities</h5>
      <h2><i class="fa fa-home fa-3x"></i></h2>

     
      <div className= "row1"> 

      <div className="col-lg-6 col-sm-12 program"> 
      
      <img src={img9} className="img1" alt="..."/>Pool
      
     <img src={img11} className="img1" alt="..."/>AC

      </div>


      <div className="col-lg-6 col-sm-12 program"> 
    

    <img src={img10} className="img1" alt="..."/>WIFI


   <img src={img12} className="img1" alt="..."/>Food
   </div>
      </div> 
     </div>
     <div class="card-footer">
      <small class="text-muted"></small>
      <button className='button'>R2099</button>
     </div>
     </div>

     <div class="card">
     <img src={img2} class="card-img-top" alt="..."/>
     <div class="card-body">
     <h5>Signature dish</h5>
      <h5 class="card-title">Facilities</h5>
      <div className= "row1"> 

     <div className="col-lg-6 col-sm-12 program"> 

      <img src={img9} className="img1" alt="..."/>Pool

      <img src={img11} className="img1" alt="..."/>AC

     </div>


     <div className="col-lg-6 col-sm-12 program"> 


     <img src={img10} className="img1" alt="..."/>WIFI


     <img src={img12} className="img1" alt="..."/>Food
      </div>
      </div>
      </div>
     <div class="card-footer">
      <small class="text-muted"></small>
      <button className='button'>R320</button>
     </div>
     </div>
     
      <div class="card">
     <img src={img6} class="card-img-top" alt="..."/>
     <div class="card-body">
     <h5>Unique bathrooms</h5>
      <h5 class="card-title">Facilities</h5>
      
      <div className="row1">

     <div className="col-lg-6 col-sm-12 program"> 

      <img src={img9} className="img1" alt="..."/>Pool

     <img src={img11} className="img1" alt="..."/>AC
     </div>

     <div className="col-lg-6 col-sm-12 program"> 

     <img src={img10} className="img1" alt="..."/>WIFI

     <img src={img12} className="img1" alt="..."/>Food
      </div>
      </div>
      </div>
     <div class="card-footer">
      <small class="text-muted"></small>
      <button className='button'>R2099</button>
     </div>
     </div>

     <div class="card">
     <img src={img4} class="card-img-top" alt="..."/>
     <div class="card-body">
      <h5>Single bed</h5>
      <h5 class="card-title">Facilities</h5>

      <div className="row1">

     <div className="col-lg-6 col-sm-12 program"> 

      <img src={img9} className="img1" alt="..."/>Pool

     <img src={img11} className="img1" alt="..."/>AC
     </div>

     <div className="col-lg-6 col-sm-12 program"> 

     <img src={img10} className="img1" alt="..."/>WIFI

     <img src={img12} className="img1" alt="..."/>Food
      </div>
      </div>
     </div>
     <div class="card-footer">
      <small class="text-muted"></small>
      <button className='button'>R980</button>
      </div>
      </div>
      
      </div>
      </div>
     
     
     );
     }

     export default About;