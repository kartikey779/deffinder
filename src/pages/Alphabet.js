import WordClickHandler from "../pop/pop";
import Search from "../searchBar/search";
import './com.css';
import React, { useState, useEffect } from "react";


function Alphabet(){
  const [loading, setLoading] = useState(true);
  const [ result, setResult ] = useState([]);
  


  useEffect(() => {
    fetch("http://localhost:5000/words/alphabet", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setResult(data);
        
      })
      .catch((error) => {
        console.error("error fetching data:", error);
      })
      .finally(()=>{
        setLoading(false);

      });
  }, []);


  

 
   
    return (
      <div className="min">
      <div className="com1">
        <Search setResult={setResult} />
      </div>
      <div className="com">
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul className="ol">
              {result.slice(0, 25).map((item, index) => (
                <li className="words" key={index}>
                  {typeof item === "object" ? (
                    <WordClickHandler
                      subject={item.subject}
                      word={item.word}
                      popupContent={<p>{item.meaning}</p>}
                    />
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
export default Alphabet;