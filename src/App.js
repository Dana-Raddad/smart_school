import React, { Component } from 'react';
import './App.css';
import SectionCard from  './SectionCard'
import SignIn from  './SignIn'
import AddDriver from './Driver-Signup'
import BusLocation from './BusLocation'
import DepartedStudents from './DepartedStudents'
import DriversPage from './DriversPage'
import { BrowserRouter,Route,Switch} from 'react-router-dom'
import Students_SignUp from './Students-SignUp'
import Student from './Student'
import DepartuerCenter from './DepartuerCenter'
class App extends Component {



  render(){
    return (
      
      <BrowserRouter>
      <div className="App" >
         <Switch>
         <Route path="/SignIn" exact component={SignIn}/>
         <Route path="/SectionCards" component={SectionCard}/>
         <Route path="/Students-SignUp"  component={Students_SignUp}/>
         <Route path="/Driver-Signup"  component={AddDriver}/>
         <Route path="/BusLocation"  component={BusLocation}/>
         <Route path="/DepartedStudents"  component={DepartedStudents}/>
         <Route path="/DriversPage"  component={DriversPage}/>
         <Route path="/Student"  component={Student}/>
         <Route path="/DepartuerCenter"  component={DepartuerCenter}/>
         </Switch>
        
      </div>
      </BrowserRouter>

    );
  }
}

export default App;




/*
 
    ////////////////////

/////////////
 <BrowserRouter>
      <div className="App" >
         <Switch>
         <Route path="/SignIn"  component={SignIn}/>
         <Route path="/SectionCards" component={SectionCard}/>
         <Route path="/Students"  component={Map}/>
         </Switch>
        
      </div>
      </BrowserRouter>
*/