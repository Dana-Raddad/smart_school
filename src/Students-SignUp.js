import React, { Component } from 'react';
import './App.css';
import Map from './Components/SMap'
import Header from './Components/TheHeader'
import { Link} from 'react-router-dom'
class Students_SignUp extends Component {



    render(){
      return (
          <div>
              <Header/>  
          <div className="BackeG">
          <div className="SectionCard">
          <form>
          <label className="Information">
          Enter the student's information </label>
          <div>
          <p><input className="input" placeholder="  Student name " type="text"></input></p>
          <p><input className="input" placeholder="  Parent name " type="text"></input></p>
          <p><input className="input" placeholder="  Student birthday " type="text"></input></p>
          <p><label className="Information">
          Select Student Grade:  </label>
          <select className="select" >
          <option value="fs">1</option>
          <option value="sd">2</option>
          <option selected value="th">3</option>
          <option value="fo">4</option>
          </select></p>

          <p>
          <label className="Information">
          Select Gender:  </label>
          <select className="select" >
          <option value="Male">Male</option>
          <option selected value="Female">Female</option>
          </select></p>
    
          <p>
          <label className="Information">
          Select Transportation Method:  </label>
          <select className="select" >
          <option value="car">Car</option>
          <option selected value="bus">Bus</option>
          </select></p>
          </div>
          </form>
          <p>
          
          <div className="Map" style={{margin:'70px'}}>
           <Map/>
            </div>
            </p>
            <p>
           
            <Link to="/SectionCards" > <button className="Button"  >back</button></Link>
            <button className="Button" >Add Student</button></p>
     
     </div> 
    </div>
    </div>
       );
  }
}

export default Students_SignUp;