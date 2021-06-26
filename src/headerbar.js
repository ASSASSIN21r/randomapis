import React from 'react'
import { Component } from 'react'
import './api.css'
import axios from 'axios'
import API from './api'
class Headerbar extends Component{

      
    
    render(){
    return(
      <div>
      <header className='headerbar'>
          <p  onClick={function(){window.location='/'}}>RandomAPI</p>
          <div className='comp'>
          <span className='headerlogin'>
              <p className='b' id='contactbtn'>ContactUs</p>
          </span>
          
          <span className='headerdocs'>
              <p className='b'>Docs</p>
          </span>
          </div>
      </header>
      <div id='textlink'>
      <p className='textl'>Bored?Click to Have Some Fun With</p>
      <a className='textl' id='randlink' href='#apicards'>RandomAPI's</a>
      </div>
    </div>)
 }
     
 
}
export default Headerbar
