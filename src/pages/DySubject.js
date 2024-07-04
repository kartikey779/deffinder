import WordClickHandler from "../pop/pop";
import './com.css';
import React, { useState, useEffect } from "react";
import Pagination from "../pagination/pagination";

function DynamicSubject({subject}){
  
  const [  wordData, setWordData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(27);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = wordData.slice(indexOfFirstPost, indexOfLastPost);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  useEffect(() => {
    fetch(`https://deffind-api.vercel.app/words/subjects/${subject}`, {
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
  }, [subject]);
  
    return (
        <div className="min">

        
        <div className="com1">{subject}</div>
        <div className="com">
        <div>
             

            <ul className="ol">
                {wordData.slice(indexOfFirstPost, indexOfLastPost).map((item,index)=>(<li className="words" key={index}>
                    {typeof item === 'object' ? (
                        <WordClickHandler currentPosts={currentPosts} subject={item.subject} word={item.word} popupContent={<p>{item.meaning}</p>}/>
                    ):(
                        item
                    )}
                </li>
                ))}
           
            </ul>


        </div>

        </div>
        <Pagination 
      postPerPage={postsPerPage}
      totalPosts={wordData.length}
      onPageChange={handlePageChange} />

        </div>
    );
}
export default DynamicSubject;