import { Link } from 'react-router-dom';
import WordClickHandler from '../pop/pop';
import { useState, useEffect } from 'react';
import Pagination from '../pagination/pagination';

function SubjectComponent({ subject }) {
  const [wordData, setWordData] = useState([]);
  


  

  useEffect(() => {
    fetch(`https://deffind-api.vercel.app/words/subjects/${subject}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'userData');
        setWordData(data);
      })
      .catch((error) => {
        console.error('error fetching data:', error);
      });
  }, [subject]);

  return (
    <div>
      <fieldset>
        <legend className="legend">
          <Link to={`/subjects/${subject}`}>{subject}</Link>
        </legend>
        <ul className="ol">
          {wordData.slice(10, 22).map((item, index) => (
            <li className="words" key={index}>
              {typeof item === 'object' ? (
                <WordClickHandler word={item.word} subject={item.subject} popupContent={<p>{item.meaning}</p>} />
              ) : (
                item
              )}
            </li>
          ))}
        </ul>
      </fieldset>
    </div>
  );
}

function CombinedComponent() {
  const [uniqueSubjects, setUniqueSubjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);



  useEffect(() => {
    // Fetch unique subjects from the server
    fetch('https://deffind-api.vercel.app/words/subjects/uniqueSubjects', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'uniqueSubjects');
        setUniqueSubjects(data);
        
      })
      .catch((error) => {
        console.error('error fetching unique subjects:', error);
      });
  }, []);


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = uniqueSubjects.slice(indexOfFirstPost, indexOfLastPost);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {uniqueSubjects.slice(indexOfFirstPost, indexOfLastPost).map((subject, index) => (
        <SubjectComponent currentPage={currentPosts} key={index} subject={subject} />
      ))}
      <Pagination 
      postPerPage={postsPerPage}
      totalPosts={uniqueSubjects.length}
      onPageChange={handlePageChange} />
    </div>
  );
}

export default CombinedComponent;
