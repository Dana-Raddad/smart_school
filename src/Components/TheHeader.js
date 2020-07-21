import React, { Component } from 'react';
import HeadImage from  './Images/Head.png'
import './Component.css';
export class TheHeader  extends Component {

render(){
    return (
            <div className="GHead">
            <img src={HeadImage} className="Head" alt="Header" />
            </div>
    );
    }

}
export default TheHeader ;