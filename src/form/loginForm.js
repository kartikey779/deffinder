import axios from "axios";
import "../HEADER/header.css";
import { useState } from "react";

function Login(){
    
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/register/login', {name, email, password})
        .then(result => {console.log(result)
        if(result.data === "Success") {
            alert("you are logged In");
            setName("");
            setEmail("");
            setPassword("");
        }else{
            alert("Wrong data inserted")
            setEmail("");
            setPassword("");
        }
        })
        .catch(err => console.log(err))
    }

    return(
        <>
        <span className="regis">login</span>
        <div className="frm">

        <form onSubmit={handleSubmit}>
            <lebal className="lebal">email:</lebal>
            <input 
            id="inputL"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
            /><br/>
            <lebal className="lebal">Password:</lebal>
            <input
             id="inputL"
             type="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             
             /><br/>
            <button id="btn" type="submit" >Login</button>
        </form>
        
             </div>

        </>
    );
}
export default Login;