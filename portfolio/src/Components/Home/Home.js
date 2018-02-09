import React from 'react';
import './Home.css';
import Me from '../../Assets/Me.JPG';

export default function Home() {
    return (
      <div className="Home_Main" id="home">
        <img className='Me' alt='' src={Me}/> 
        <div className="Logo_Container">
            <p className="Job_Title">Web Developer</p>
            <p className='Name'>Travis Meamber</p>
        </div>
      </div>
    );
  }