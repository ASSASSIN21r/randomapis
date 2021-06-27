import React from 'react'
import { Component } from 'react'
import './api.css'
import axios from 'axios'
class Contactus extends Component{
    render(){
        return(<div id='cus'>
         

         <img id='imgc' src='https://image.freepik.com/free-photo/wooden-block-cube-symbol-telephone-email-contact-website-page-contact-us-e-mail-marketing-concept_150455-4764.jpg'></img>
         <h1>Have Some Questions or Suggestion?</h1>
         <h2>We'd Love to hear from You!</h2>
         <form id='f'method='post' method='/contactus' target='/contactus'>
             <label for='fname' className='labels'>First Name:</label>
             
          <input required className='inp'name='fname' id='fname' type='text' placeholder='First Name'></input>
          <br></br>
          <br></br>
          <label for='lname' className='labels'>Last Name:</label>
          <input  className='inp'name='lname'id='lname' type='text' required placeholder='Last Name'></input>
          <br></br>
          <br></br>
          <label className='labels' for='em'>Email:</label>
          
          <input className='inp'name='email' id='em'type='email' required placeholder='Enter Email'></input>
          <br></br>
          {/* <label for='sugg'>Suggestions</label>
          <br></br>
          <input className='inp'name='sugg' id='sugg'type='textbox' placeholder='Suggestions'></input>
          <br></br> */}
          <label  className='labels' for="w3review">Suggestions:</label>

           <textarea  required id="w3review" name="w3review" rows="4" cols="30">

           </textarea>
          <button type='submit' id='subbtn'>SUBMIT</button>


         </form>
        </div>)
    }
}
export default Contactus