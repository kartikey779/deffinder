import { ReactComponent as MySvg3 } from './addSvg3.svg';
import React, { useState } from 'react';
import './likeButton.css';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    
    setLikes(likes + 1);
  };
  const convertLikes = (likes) => {
    if (likes >= 1000000) {
      return (likes / 1000000).toFixed(1) + 'M';
    } else if (likes >= 1000) {
      return (likes / 1000).toFixed(1) + 'K';
    } else {
      return likes.toString();
    }
  };
 
    
    

  return (
    <div>
      <div className="star" >
        <div className="svg-container2">

         <svg width="44" height="26" viewBox="56 -45 116 57" style={{ overflow:'visible'}}>  

         <MySvg3 onClick={handleLike} className="Svg2"/>

           </svg>
           
          </div>
          
      </div>
      <div className="likeCount">{convertLikes(likes)}</div>
          
      </div>
  //   <div>
  //    <div className="svg-container2">

  //    <svg width="44" height="26" viewBox="44 -30 70 57" style={{ overflow:'visible'}}>  
     
  //       <MySvg3 onClick={handleLike} className="Svg2"/>
        
  //    <span>{likes} likes</span>
     
  //    </svg>
  //   </div>
  // </div>
  );
    
};

export default LikeButton;
