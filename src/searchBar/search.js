import { FaSearch } from "react-icons/fa";
import React from "react";
import './search.css';
import { useState } from "react";


function Search({setResult}){
    const [input, setInput] = useState("");

    const fetchData = async (value) => {
        try {
            const encodedValue = encodeURIComponent(value);
            const response = await fetch(`https://deffind-api.vercel.app/words/alphabet?search=${encodedValue}`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const json = await response.json();
    
            
            const results = json.filter((user) => {
                return value && user && user.word && user.word.toLowerCase().includes(value.toLowerCase());
            });

            console.log(results);
            setResult(results);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };
    

    const handleChange =(value) =>{
        setInput(value);
        fetchData(value);
    };

    return(
        <div className="search">
        <FaSearch id="search-icon"/>
        <input id="searchBar" 
        placeholder="Type to search"
         value={input}
         onChange={(e)=> handleChange(e.target.value)}
         autoComplete="off"
         />
        </div>
    );
}

export default Search;