import WordClickHandler from "../pop/pop";
import './com.css';
import React, { useState, useEffect } from "react";

function ComputerScience(){
  const [  wordData, setWordData] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5000/words/computerscience", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setWordData(data);

      })
      .catch((error) => {
        console.error("error fetching data:", error);
      });
  }, []);
  
    return (
        <div className="min">

        
        <div className="com1">Computer Science</div>
        <div className="com">
        <div>
             

            <ul className="ol">
                {wordData.map((item,index)=>(<li className="words" key={index}>
                    {typeof item === 'object' ? (
                        <WordClickHandler subject={item.subject} word={item.word} popupContent={<p>{item.meaning}</p>}/>
                    ):(
                        item
                    )}
                </li>
                ))}
           
            </ul>


        </div>

        </div>

        </div>
    );
}
export default ComputerScience;