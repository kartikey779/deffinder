import './form.css';
import { useState } from "react";

const Form = () => {
   const [subject, setSubject ] = useState("");
   const [word, setWord ] = useState("");
   const [meaning, setMeaning ] = useState("");
   const handleOnSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch(
      "https://deffind-api.vercel.app/words/", {
        method: "post",
        body:JSON.stringify({subject, word, meaning}),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    console.log('API response', result);
    result = await result.json();
    console.warn(result);
    if (result){
      alert("Data saved succesfully");
      setSubject("");
      setWord("");
      setMeaning("");
    }
   }
 
    return(
        <form action="">

            <div className='modal'>
            <div className='content'>
              AddDesiredWord
            </div>
            <p className="ppp">Free To Add Your DesiredWord On Our Servers    </p>

            <select name="category" value={subject}  onChange={(e)=> setSubject(e.target.value)}>
              
              <option value="default" selected>default</option>
              <option value="Computer science">Computer science</option>
              <option value="Economics">Economics</option>
              <option value="Music">Music</option>
            </select>


            <label>Word: </label>
              <input type="text" name="Word" id="word1" className="desireInput" placeholder="Put Your Desired Word " value={word}
               onChange={(e)=> setWord(e.target.value)} 
               autoComplete='off'/>
         
             
            
              <label>Meaning:</label>
              <textarea name="comment" id="paragraph" rows="5" cols="40" value={meaning}
              onChange={(e)=> setMeaning(e.target.value)}
          ></textarea>

            
            <button  className="anchor3" type="submit" onClick={handleOnSubmit}>submit</button>

            <div>
              <p1 className="pq">BY continuing, you agree to our Term of service.</p1>
              <p1>Read our Privacy Policy</p1>
            </div>
          </div>
            </form>
    );
}

export default Form;