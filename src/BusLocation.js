import React, { Component } from 'react';
import './App.css';
import Map from './Components/BusMap'
import Header from './Components/TheHeader'
import { Link } from 'react-router-dom';
class BusLocation extends Component {

    render(){
      return (
          <div>
              <Header/>  
          <div className="BackeG">
          <div className="SectionCard">
          <label className="Information">
          View Bus Location: </label>
          </div>
          <div className="BusLocation"></div>
          <div className="Map" style={{margin:'70px 50px'}}>
           <Map/>
            </div>
            <p>
            <Link to="/SectionCards" > <button className="Button"  >back</button></Link></p>
    </div>
    </div>
       );
  }
}

export default BusLocation;