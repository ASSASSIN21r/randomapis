import React from 'react'
import { Component } from 'react'
import './api.css'
import axios from 'axios'
import API from './api'
import Contactus from './contactus'
class Headerbar extends Component{

    contactclicked=()=>{
        window.location='/contactus'
        // let tex=document.getElementById('tex')
        // tex.style.display='none'
    }
    
    render(){
        
    return(
      <div>
      <header className='headerbar'>
          <p  onClick={function(){window.location='/'}}>RandomAPI</p>
          <div className='comp'>
          <span className='headerlogin'>
              <p className='b' id='contactbtn' onClick={this.contactclicked}>ContactUs</p>
          </span>
          
          <span className='headerdocs'>
              <p className='b'>Docs</p>
          </span>
          </div>
      </header>
      
    </div>)
 }
     
 
}
export default Headerbar
