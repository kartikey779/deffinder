import React from 'react';
// import { useState } from 'react';
import './header.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { ReactComponent as MySVG } from './addSvg.svg';
import Form from '../form/form';
import Login from '../form/loginForm';
import SignUp from '../form/signup';


  
  function Header() {
    
  //  const [username, setUsername ] = useState("");
  //  const [password, setPassword ] = useState("");
  //  const handleOnSubmit = async (e) => {
  //   e.preventDefault();
  //   try{
  //     const response = await fetch("/register",{
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         username,
  //         password,
  //       }),
  //     });
    
  //   if (response.status === 200) {
  //     // Handle success, e.g., show a success message
  //   } else {
  //     // Handle errors, e.g., show an error message
  //     const data = await response.json();
  //     console.error(data.error);
  //   }
  // } catch (error) {
  //   console.error(error);
  // }
  // };
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
				{  <div   class="signIn">Sign in</div> }
				modal nested>
				{
					close => (
            
            
            <div>
            <Login/>
              
            </div>
						
					)
				}
			</Popup>
          

          <Popup trigger=
				{ <div  class="signUp">Sign up</div>}
				modal nested>
				{
					close => (
            <SignUp/>
					)
				}
			</Popup>
          
         

          </div>

          </div>
          </h1>
      </section>
    );
  }

  export default Header;
  
 

  