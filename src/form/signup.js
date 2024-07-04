import "./form.css";
import { useState } from 'react';
import axios from 'axios';


function SignUp(){

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/register', {name, email, password})
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

    return(
        <>
        <div className="regis">registration</div>
        <form onSubmit={handleSubmit}>
        <lebal className="lebal">name:</lebal>
            <input 
            id="inputL"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          
            /><br/>
            <lebal className="lebal">email:</lebal>
            <input 
            id="inputL"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          
            /><br/>
            <lebal className="lebal">password:</lebal>
            <input
            id="inputL"
             type="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             
            /><br/>
            <button id="btn" type="submit" >register</button>
        </form>

        </>
    );
}
export default SignUp;