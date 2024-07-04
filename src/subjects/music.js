import { Link }  from 'react-router-dom';
import WordClickHandler from '../pop/pop';
import { useState, useEffect } from 'react';

function Music(){

    const [  wordData, setWordData] = useState([]);


    useEffect(() => {
      fetch("http://localhost:5000/words/music", {
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
    return(
        <div>
              <fieldset>
            <legend className="legend"><Link to='/Music'>Music</Link></legend>

            <ul className="ol">
                {wordData.slice(0, 12).map((item,index)=>(<li className="words" key={index}>
                    {typeof item === 'object' ? (
                        <WordClickHandler word={item.word} subject={item.subject} popupContent={<p>{item.meaning}</p>}/>
                    ):(
                        item
                    )}
                </li>
                ))}
           
            </ul>
           </fieldset>

        </div>
    )
}
export default Music;