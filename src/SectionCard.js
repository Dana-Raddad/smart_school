import React, { Component } from 'react';
import './Components/Component.css';
import './App.css';
import Header from './Components/TheHeader'
import { Link} from 'react-router-dom'
export class SectionCard  extends Component {


render(){
    return (
        
        <div className="BackeG">
             <Header/>
             
             < div className="SectionCard">
             
                 <p>
                
            <Link to="/DriversPage" > <div className="Bus" >    </div></Link>
            <Link to="/Student" > <div className="Students">    </div></Link >
            <Link to="/BusLocation" ><div className="Busloc">    </div></Link>
             </p>
             <p>
             <Link to="/DepartuerCenter"><div className="Dept">      </div></Link>
             <Link to="/DepartedStudents"><div className="DeptStud">      </div></Link>
             <div className="NotfyNo"></div>
             <div className="AbsNotfy">      </div>
             </p>
             </div>
             </div>
             
             
    );
    }

}
export default SectionCard ;