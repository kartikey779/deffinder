import { useState, useEffect} from 'react';
import WordClickHandler from "../pop/pop";
import './com.css';

function Economics(){
    const [  wordData, setWordData] = useState([]);




  useEffect(() => {
    fetch("http://localhost:5000/words/economics", {
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

        
        <div className="com1">Economics</div>
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
export default Economics;