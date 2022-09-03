import React from "react";
import './Schools.css';
import pic1 from './Assets/DSC_0836.jpg';
import pic2 from './Assets/DSC_0838.jpg';
import pic3 from './Assets/DSC_1017.jpg';

function Schools(){
    return (
        <div className="Schools">
            <img src={pic1} alt="" />
            <img src={pic2} alt="" />
            <img src={pic3} alt="" />
        </div>
    )
}

export default Schools;