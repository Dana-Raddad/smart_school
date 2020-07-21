import React, { Component } from 'react';
import './App.css';
import { BrowserRouter,Route,Switch} from 'react-router-dom'
import SectionCard from  './SectionCard'
import { Link} from 'react-router-dom'
class SignIn extends Component {
 
    onSubmit = () => {
        if(true){
         // onClick={this.onSubmit}
          
        }
     }  

  render(){
    return (
      
      <div className="SignIn" >

        
        <form className="form" >
        <label className="Information">
        <p >Email</p> 
        <input className="input" placeholder="   Enter your email" type="email" />
        <p >Password</p></label>
        <input className="input" placeholder="   Enter your password" type="password" />
        <p> <a href="/users/123" className="LinkActive">Forgot Password?</a></p>
        <Link to="/SectionCards" ><button className="LoginButton">Login</button></Link>
       
      </form>
        
      </div>
     
    );
  }
}

export default SignIn;