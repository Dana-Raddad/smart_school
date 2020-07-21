import React, { Component } from 'react';
import './App.css';
import Pagination from './Components/Pagination'
import Header from './Components/TheHeader'
import { Link } from 'react-router-dom';
class DriversPage extends Component {

    render(){
      return (
          <div>
              <Header/>  
          <div className="BackeG">
          <div className="SectionCard">
          <form>
          <p>
          <select className="select" >
          <option selected value="1">Sort By:</option>
          <option value="Name">Name</option>
          <option  value="3">3</option>
          <option value="4">4</option>
          </select></p>
          <p><input className="input" readOnly="true"  placeholder="  Driver Name ,Phone-NO  " type="text"></input></p>
              <p><input className="input" readOnly="true"  placeholder="  Driver Name ,Phone-NO  " type="text"></input></p>
              <p><input className="input" readOnly="true"  placeholder="  Driver Name ,Phone-NO  " type="text"></input></p>
              <p><input className="input" readOnly="true"  placeholder="  Driver Name ,Phone-NO  " type="text"></input></p>
              <p><input className="input" readOnly="true"  placeholder="  Driver Name ,Phone-NO  " type="text"></input></p>
              <p><input className="input" readOnly="true"  placeholder="  Driver Name ,Phone-NO  " type="text"></input></p>
              <p><input className="input" readOnly="true"  placeholder="  Driver Name ,Phone-NO  " type="text"></input></p>
              <p><input className="input" readOnly="true"  placeholder="  Driver Name ,Phone-NO  " type="text"></input></p>
              <p><input className="input" readOnly="true"  placeholder="  Driver Name ,Phone-NO  " type="text"></input></p>

             <p><Pagination/></p> 
          <p>
            <Link to="/SectionCards" > <button className="Button"  >back</button></Link>
            <Link to="/Driver-Signup" ><button className="Button" >Add Driver</button></Link></p>
          </form>
    </div>
    </div>
    </div>
       );
  }
}

export default DriversPage;