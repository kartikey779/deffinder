import './heading.css';
import React from 'react';
import Cs from '../subjects/cs';
import Economics from '../subjects/Eco';
import Music from '../subjects/music';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";







export default function heading() {
    return (
      <div className="min">
            <div className="heading">DEF-FINDER</div>
            <div className="para1">You will Get 5Millon+ Words with Their 5 Line Explaination </div>
            <div className="search">
            
              <Link id="searchLink"to="/alphabet"><FaSearch id="search-icon1"/>Search</Link>
              </div>
            <Cs/>
            <Economics/>
            <Music/>


           

           
      </div>
    );
  }