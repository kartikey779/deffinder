import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Blog.css";
import Pagination from '../pagination/pagination';


const BlogContent = () => {
  const [blogData, setBlogData] = useState([]);
  const [postsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://deffind-api.vercel.app/blogs'); // Replace with your API endpoint
        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchData();
  }, []);

 

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>

    <div className="blogPhoto">
      {blogData.slice(indexOfFirstPost, indexOfLastPost).map((post, index) => (
        <div className="blogGrid" key={index}>
          <img src={post.photoUrl} alt={`blogPhoto-${index}`} />
          <div className="blogContent">
            <h3 className="blogH3">{post.title}</h3>
            <h5 className="blogH5">{post.date}</h5>
            <p className="blogParagraph">{post.content}</p>
            <Link to={`/Blog/${post.id}`} className="blogLink">READ MORE</Link>
          </div>
        </div>
        
        ))}
      
    </div>
    <Pagination
      postPerPage={postsPerPage}
      totalPosts={blogData.length}
      onPageChange={handlePageChange} />
      </div>
  );
}

export default BlogContent;
