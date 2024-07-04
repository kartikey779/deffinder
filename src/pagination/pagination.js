import React, { useState } from "react";
import './pagination.css';
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaEllipsisH } from "react-icons/fa";

const Pagination = ({ postPerPage, totalPosts, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    if (index === 'prev' && activeItem > 1) {
      setActiveItem(activeItem - 1);
      onPageChange(activeItem - 1);
    }else if(index === 'next' && activeItem < 1){
        setActiveItem(activeItem + 2);
        onPageChange(activeItem + 2);

    } else if (index === 'next' && activeItem < pageNumbers.length) {
      setActiveItem(activeItem + 1);
      onPageChange(activeItem + 1);
    } else {
      setActiveItem(index === activeItem ? null : index);
      onPageChange(index);
    }
  };

  return (
    <nav>
      <ul className="pagination">
        {/* Left arrow */}
        <li className={`page-item ${activeItem <= 1 ? 'disabled' : ''}`}>
          <Link href="!#" className="page-link" onClick={() => handleItemClick(activeItem > 1 ? 'prev' : 'disabled')}>
            <FaChevronLeft className="icons"/>
          </Link>
        </li>

        {/* First number */}
        <li className={`page-item ${1 === activeItem ? 'clicked' : ''}`} onClick={() => handleItemClick(1)}>
          <Link href="!#" className="page-link">
            1
          </Link>
        </li>

        {/* Dots or second number */}
        {activeItem > 3 && (
          <li className="page-item">
            <Link href="!#" className="page-link">
              <FaEllipsisH />
            </Link>
          </li>
        )}

        {/* Numbers or dots based on activeItem */}
        {activeItem <= 3
          ? pageNumbers.slice(1, 3).map((number) => (
              <li
                key={number}
                className={`page-item ${number === activeItem ? 'clicked' : ''}`}
                onClick={() => handleItemClick(number)}
              >
                <Link href="!#" className="page-link">
                  {number}
                </Link>
              </li>
            ))
          : pageNumbers.slice(activeItem -1 , activeItem < pageNumbers.length - 1 ? activeItem : activeItem + 2 ).map((number) => (
              <li
                key={number}
                className={`page-item ${number === activeItem ? 'clicked' : ''}`}
                onClick={() => handleItemClick(number)}
              >
                <Link href="!#" className="page-link">
                  {number}
                </Link>
              </li>
            ))}

        {/* Dots or last number */}
        
        {activeItem + 1  <  pageNumbers.length  &&  pageNumbers.length  >  3 && (
          <>
            <li className={`page-item ${pageNumbers.length <= activeItem + 1 ? 'disabled' : ''}`}>
              <Link href="!#" className="page-link">
                <FaEllipsisH />
              </Link>
            </li>
            <li
              key={pageNumbers.length}
              className={`page-item ${pageNumbers.length === activeItem  ? 'clicked' : ''}`}
              onClick={() => handleItemClick(pageNumbers.length)}
            >
              <Link href="!#" className="page-link">
                {pageNumbers.length}
              </Link>
            </li>
          </>
        )}

        {/* Right arrow */}
        <li className={`page-item ${activeItem === pageNumbers.length  || pageNumbers.length === 1  ? 'disabled' : ' '}`} onClick={() => handleItemClick('next')}>
          <Link href="!#" className="page-link">
            <FaChevronRight />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
