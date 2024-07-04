import React from 'react';
// import { useState } from 'react';
import './header.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { ReactComponent as MySVG } from './addSvg.svg';
import Form from '../form/form';
import { Link } from 'react-router-dom';
import Login from '../auth/Login';
// import SignUp from '../form/signup';


  
  function Header({user}) {
    user = false;
    
    return (
      <section >
        <h1 className="h1">
          <a  href= "/" className="main" >DEF-Finder</a>

        <div className="h2">
          
        <div  >
          
          
          
      <Popup trigger=
				{ 
          <div className="svg-container">

          <svg className="svgFile" width="44" height="26" viewBox="90 36 65 48" style={{ overflow:'visible'}}> 
        
            <MySVG height="100px"/>
          </svg>
          </div>
       }
				modal nested>
				{
          close => (
            <Form/>
					)
				}
			</Popup> 
           
          </div>
          

          <div className= "flex">
          <Popup trigger=
				{  !user ? (
          <button className="signInButton">
          <span>Sign in</span>
          </button>
          ) : ( <Link to="/">logout</Link>)
          
          
       }
				modal nested>
				{
          close => (
            <Login/>
					)
				}
			</Popup>
          {/*  */}


          </div>

          </div>
          </h1>
      </section>
    );
  }

  export default Header;
  
 

  