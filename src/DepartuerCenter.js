import React, { Component } from 'react';
import './App.css';
import Pagination from './Components/Pagination'
import Header from './Components/TheHeader'
import { Link } from 'react-router-dom';
class DepartuerCenter extends Component {

    render(){
      return (
          <div>
              <Header/>  
          <div className="BackeG">
          <div className="SectionCard">
          <p><Pagination/></p> 
          <p><div className="Bus1"></div></p>
          <form>
          <p><input className="input"   placeholder="  Student Name " type="text"></input></p>
              <p><input className="input"   placeholder="  Student Name " type="text"></input></p>
              <p><input className="input"   placeholder="  Student Name " type="text"></input></p>
              <p><input className="input"  placeholder="  Student Name " type="text"></input></p>
              <p><input className="input"  placeholder="  Student Name " type="text"></input></p>
              <p><input className="input"   placeholder="  Student Name " type="text"></input></p>
              <p><input className="input"   placeholder="  Student Name " type="text"></input></p>
              <p><input className="input"   placeholder="  Student Name " type="text"></input></p>
              <p><input className="input"  placeholder="  Student Name " type="text"></input></p>
              <p><input className="input" placeholder="  Student Name " type="text"></input></p>
              <p><input className="input"   placeholder="  Student Name " type="text"></input></p>
              <p><input className="input"   placeholder="  Student Name " type="text"></input></p>
              <p><input className="input"   placeholder="  Student Name " type="text"></input></p>
              <p><input className="input"  placeholder="  Student Name " type="text"></input></p>
              <p><input className="input"   placeholder="  Student Name " type="text"></input></p>
              <p><input className="input"   placeholder="  Student Name " type="text"></input></p>
              <p><input className="input"  placeholder="  Student Name " type="text"></input></p>
              <p>
              <label className="Information">
          Time At: <input className="input"  placeholder="  13:30 pm " type="text"></input>
          Location: <input className="input"  placeholder="  Location " type="text"></input><p></p>
          Time At: <input className="input"  placeholder="  13:30 pm " type="text"></input>
          Location: <input className="input"  placeholder="  Location " type="text"></input></label>
            <Link to="/SectionCards" > <button className="Button"  >back</button></Link>
            <Link to="" > <button className="Button"  >Save Edit</button></Link></p>
          </form>
    </div>
    </div>
    </div>
       );
  }
}

export default DepartuerCenter;

