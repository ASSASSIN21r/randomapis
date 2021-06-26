import React from 'react'
import { Component } from 'react'
import './api.css'
import axios from 'axios'
class API extends Component{
    state={
      btc:'BitCoinRate',
    catfact:'Cat Fact',
   bored:'Bored??',
     dog:'DogImages'}
       
    clicked=()=>{
      axios.get('http://localhost:9000/btc').then(Response=>{
        this.setState({
          btc:Response.data+'$'
        })
      })
    }
    catclicked=()=>{
      axios.get('http://localhost:9000/catfact').then(Response=>{
        this.setState({
          catfact:Response.data
        })
      })
    }
    boredclicked=()=>{
      axios.get('http://localhost:9000/bored').then(Response=>{
        this.setState({
          bored:Response.data
        })
      })
    }
    dogclicked=()=>{
     
      axios.get('http://localhost:9000/dogimg').then(Response=>{
        
  let doge=document.getElementById("dogpop")
  doge.style.backgroundImage="url"+"("+Response.data+")"
        this.setState({
          
        })
      })
    }
   
   
    btcclicked=()=>{
      let btcp =document.getElementById("btcpop")
         
          btcp.style.display='inline'
     
    }
    catdivclicked=()=>{
      let cat=document.getElementById("catpop")
     
      
      cat.style.display='inline'
 
}
boreddivclicked=()=>{
  let bored=document.getElementById("boredpop")
 
  
  bored.style.display='inline'

}
dogdivclicked=()=>{
  let doge=document.getElementById("dogpop")
 
  
  doge.style.display='inline'

}
    btccancel=()=>{
      let btcp=document.getElementById("btcpop")
      let cat=document.getElementById("catpop")
      let bored=document.getElementById("boredpop")
      let doge=document.getElementById("dogpop")
       btcp.style.display='none'
       cat.style.display='none'
       bored.style.display='none'
       doge.style.display='none'
    }
    render(){
    return(
      <div className='apicard'id='apicards'>
        <div id='btccard' onClick={this.btcclicked}>
        <p className='btcele' id='btcratein'>BitCoin Rate In $</p>
     
      </div>
      {/* catcard */}
      <div className='catcard' id='cc' onClick={this.catdivclicked}>
      <p id='catele'>CatFacts</p>
      </div>

      <div className='catcard' id='bored' onClick={this.boreddivclicked}>
      <p id='boredele'>Bored?</p>
      </div>

      <div className='catcard' id='dog' onClick={this.dogdivclicked}>
      <p id='dogele'>DogImages</p>
      </div>
 {/* BitCoin */}
      <div id='btcpop' className='btcpop'>
        <button className='cancelbtc' onClick={this.btccancel}>X</button>
        <button className='btcele' id='btcbtn' onClick={this.clicked}>CLICK ME </button>
      <p className='btcele' id='btcdisplay'>{this.state.btc}</p>
      </div>
 {/* cat */}
      <div id='catpop' className='btcpop'>
        <button className='cancelbtc' onClick={this.btccancel}>X</button>
        <button className='btcele' id='btcbtn' onClick={this.catclicked}>CLICK ME </button>
      <p className='btcele' id='catdisplay'>{this.state.catfact}</p>
      </div>
{/* bored */}
      <div id='boredpop' className='btcpop'>
        <button className='cancelbtc' onClick={this.btccancel}>X</button>
        <button className='btcele' id='btcbtn' onClick={this.boredclicked}>CLICK ME </button>
      <p className='btcele' id='boreddisplay'>{this.state.bored}</p>
      </div>
 {/* dogimg */}
      <div id='dogpop' className='btcpop'>
        <button className='cancelbtc' onClick={this.btccancel}>X</button>
        <button className='btcele' id='btcbtn' onClick={this.dogclicked}>CLICK ME </button>
      <p className='btcele' id='dogdisplay'>{this.state.dog}</p>
      </div>

    </div>)
    
 }
     
 
}
export default API
