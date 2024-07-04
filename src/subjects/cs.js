import WordClickHandler from '../pop/pop';
import '../pages/com.css';
import { Link }  from 'react-router-dom';
import { useState, useEffect } from 'react';

  
function Cs(){
    // const wordData = [
    //     {
          
    //       word: "Array",
    //       popupContent: "A data structure consisting of a collection of elements (values or variables), of the same memory size, each identified by at least one array index or key",
    //     },
    //     {
    //       word: "List",
    //       popupContent: "A number of connected items or names written or printed consecutively, typically one below the other",
    //     },
    //     {
    //       word: "Heaps",
    //       popupContent: "Heaps are tree-based data structures constrained by a heap property.",
    //     },
    //     {
    //       word: "Paradigm",
    //       popupContent: "A typical example or pattern of something; a pattern or model.",
    //     },
    //     {
    //       word: "K-map",
    //       popupContent: "We can minimize Boolean expressions of 3, 4 variables very easily using K-map without using any Boolean algebra theorems",
    //     },
    //     {
    //       word: "Un-ordered List",
    //       popupContent: "An unordered list starts with the <ul> tag. Each list item starts with the <li> tag",
    //     },
    //     {
    //       word: "Lexical",
    //       popupContent: "An unordered list starts with the <ul> tag. Each list item starts with the <li> tag",
    //     },
    //     {
    //         word: "syntax",
    //         popupContent: "the arrangement of words and phrases to create well-formed sentences in a language.",
    //       },
    //       {
    //         word: "Semantics",
    //         popupContent: "the execution of a Java program creates objects, modifies them and updates object references.",
    //       },
    //       {
    //         word: "symbols",
    //         popupContent: "the characters and sequences of characters that are used to write code in that language",
    //       },  
    //       {
    //         word: "Error Handling",
    //         popupContent: "Error Handling process are to detect each error, report it to the user, and then make some recovery strategy and implement them to handle the error.",
    //       },
    //       {
    //         word: "data",
    //         popupContent: "the quantities, characters, or symbols on which operations are performed by a computer, which may be stored and transmitted in the form of electrical signals and recorded on magnetic, optical, or mechanical recording media.",
    //       }, 
          
          
    //   ];
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
   

    return(
        <div>
             <fieldset>
            <legend className="legend"><Link to='/ComputerScience'>Computer Science</Link></legend>

            <ul className="ol">
              
              
                {wordData.slice(0, 12).map((item,index)=>(<li className="words" key={index}>
                    {typeof item === 'object' ? (
                        <WordClickHandler   word={item.word} subject={item.subject} popupContent={<p>{item.meaning}</p>}/>
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
export default Cs;