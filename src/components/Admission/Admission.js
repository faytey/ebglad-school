import React from "react";
import './Admission.css';
import firstImg from './Assets/DSC_0802.jpg';
import secondImg from './Assets/DSC_0819.jpg';
import thirdImg from './Assets/DSC_0822.jpg';
import fourthImg from './Assets/DSC_0846.jpg';

function Admisions(){
    return (
        <div className="Admisions">
            <img src={firstImg} alt="" />
            <img src={secondImg} alt="" />
            <img src={thirdImg} alt="" />
            <img src={fourthImg} alt="" />
        </div> 
    )
}

export default Admisions;