import WordClickHandler from "../pop/pop";
import Search from "../searchBar/search";
import './com.css';
import React, { useState, useEffect } from "react";
import Pagination from "../pagination/pagination";


function Alphabet(){
  const [loading, setLoading] = useState(true);
  const [ result, setResult ] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(27);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = result.slice(indexOfFirstPost, indexOfLastPost);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  




  useEffect(() => {
    fetch("https://deffind-api.vercel.app/words/alphabet", {
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
              {result.slice(indexOfFirstPost, indexOfLastPost).map((item, index) => (
                <li className="words" key={index}>
                  {typeof item === "object" ? (
                    <WordClickHandler
                      currentPosts={currentPosts}
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
      <Pagination 
      postPerPage={postsPerPage}
      totalPosts={result.length}
      onPageChange={handlePageChange} />
    </div>
  );
}
export default Alphabet;