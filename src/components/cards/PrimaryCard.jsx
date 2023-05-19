import React from 'react';
import  './PrimaryCard.css';

const SecondaryBtn = ({btnImg, cardText}) => {
    return (
      <div className="secondaryBtn">
        <div className="secondaryBtn-div">
          <img src={btnImg} alt="" />
          <h3>{cardText}</h3>
        </div>
      </div>
    );
}

export default SecondaryBtn;
