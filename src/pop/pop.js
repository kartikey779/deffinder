import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './pop.css';
import LikeButton from '../likeButton/likeButton.js';


function WordClickHandler({subject, word, popupContent}) {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <li className="words1" onClick={openPopup}>{word}</li>
      <Popup  open={isPopupOpen} closeOnDocumentClick onClose={closePopup}>
      <div className='modal'>
        <div className="wordSubject">

      <div className='subject'>
              {subject}
            </div>
            <div className='content'>
              {word}
            </div>
        </div>
            {popupContent}
            <div className="closeButton">

            <div className="svg-container2">
              <LikeButton/>

            </div>
            <div className="anchor3" onClick={closePopup}>Close</div>
            </div>

            <div>
              <p1> Explore more Learn more</p1>
              <p1>DUDU</p1>
            </div>
          </div>
      </Popup>
    </div>
  );
}

export default WordClickHandler;
