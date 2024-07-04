import "./Login.css";
import { useState} from "react";
import axios from "axios";






const Login = () =>{

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://deffind-api.vercel.app/register', {name, email, password})
        .then(result => {console.log(result)
        if(result) {
            alert("you are register");
            setName("");
            setEmail("");
            setPassword("");
        }
        })
        .catch(err => console.log(err))
    }





    const [nameLogin, setNameLogin] = useState();
    const [emailLogin, setEmailLogin] = useState();
    const [passwordLogin, setPasswordLogin] = useState();
    

    const handleLoginSubmit = (f) => {
        f.preventDefault()
        axios.post('https://deffind-api.vercel.app/register/login', {nameLogin, emailLogin, passwordLogin})
        .then(result => {console.log(result)
        if(result.data === "Success") {
            alert("you are logged In");
            setNameLogin("");
            setEmailLogin("");
            setPasswordLogin("");
        }else{
            alert("Wrong data inserted")
            setEmailLogin("");
            setPasswordLogin("");
        }
        })
        .catch(err => console.log(err))
    }

    return(
        <div class="mainSignIn">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div class="loginSignIn">
				<form class="formSignIn">
					<label className="labelSignIn1" id="labelSignIn" for="chk" aria-hidden="true">Log in</label>
					<input class="inputSignIn" 
                     type="email" name="email" 
                     placeholder="Email" 
                     required=""
                     value={emailLogin}
                     onChange={(f) => setEmailLogin(f.target.value)}/>
					<input class="inputSignIn"
                     type="password" 
                     name="pswd" 
                     placeholder="Password" 
                     required=""
                     value={passwordLogin}
                     onChange={(f) => setPasswordLogin(f.target.value)}/>
					<button onClick={handleLoginSubmit} className="buttonSignIn">Log in</button>
				</form>
			</div>

      <div class="registerSignIn">
				<form class="formSignIn">
					<label className="labelSignIn2" id="labelSignIn" for="chk" aria-hidden="true">Register</label>
					<input class="inputSignIn"
                     type="text" name="txt" 
                     placeholder="Username"
                     required="" 
                     value={name}
                     onChange={(e) => setName(e.target.value)}/>
					<input class="inputSignIn" 
                     type="email" 
                     name="email" 
                     placeholder="Email"
                     required=""
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}/>
					<input class="inputSignIn"
                     type="password" 
                     name="pswd" 
                     placeholder="Password" 
                     required=""
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}/>
					<button className="buttonSignIn" onClick={handleSubmit}>Register</button>
				</form>
			</div>
	</div>
    );
}
export default Login;