import React, { Component } from 'react';
import './App.css';
import Header from './Components/TheHeader'
import { Link } from 'react-router-dom';
class Driver_SignUp extends Component {



    render(){
      return (
          <div>
              <Header/>  
          <div className="BackeG">
          <div className="SectionCard">
          <form>
          <label className="Information">
          Enter the Driver's information </label>
          <div>
          <p><input className="input" placeholder="  Driver Name " type="text"></input></p>
          <p><input className="input" placeholder="  Driver's Nubmer " type="text"></input></p>
          <p><label className="Information">
          Select a Bus:  </label>
          <select className="select" >
          <option value="1">1</option>
          <option value="2">2</option>
          <option selected value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          </select></p>
          <p>
            <Link to="/DriversPage" > <button className="Button"  >back</button></Link>
            <button className="Button" >Add Driver</button></p>
     
     </div> 
    </form>
    </div>
    </div>
    </div>
       );
  }
}

export default Driver_SignUp;