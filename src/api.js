import React from 'react'
import { Component } from 'react'
import axios from 'axios'

let data
class API extends Component{
    state={
      btc:'BTC-RATE'}
      
    
       
    
       
    clicked=()=>{
      axios.get('http://localhost:9000/btc').then(Response=>{
        
        this.setState({
          btc:Response.data
        })
           
        
        console.log(Response.data)
      })
        
      
    }
   
    
    
    render(){
    return(
      <div>
      <button onClick={this.clicked}>CLICK ME </button>
      <p>{this.state.btc}</p>

    </div>)
 }
     
 
}
export default API
