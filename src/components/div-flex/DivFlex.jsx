import React from 'react';
import { Link } from "react-router-dom";
import PrimaryBtn from '../buttons/PrimaryBtn';
import './DivFlex.css';



const DivFlex = ({imgDiv, textOne, textTwo, btnText, textList1, textList2}) => {
    return (
      <div className="div-flex">
        <div>
          <img src={imgDiv} alt="" />
        </div>
        <div className="div-flex-text">
          <h1>{textOne}</h1>
          {/* <ul>
            <li>{textList1}</li>
            <li>{textList2}</li>
          </ul> */}
          <p>{textTwo}</p>
          <PrimaryBtn buttonText={btnText} />
        </div>
      </div>
    );
}

export default DivFlex;
