import React from "react";
import './Hero.css';
import firstImage from './Hero Assets/DSC_1022.jpg';
import secondImage from './Hero Assets/DSC_1020.jpg';
import thirdImage from './Hero Assets/DSC_1011.jpg';
import fourthImage from './Hero Assets/circles.png';
import fifthImage from './Hero Assets/Polygon 1.png';

function Hero(){
    return (
        <div className="Hero">
            <div className="first-div"> 
                <div className="ebglad-intro">
                    <span>Ebglad</span>
                    <span>Schools</span>
                    <span><button>Register Here</button></span>
                </div>           
                <img className="img1" src={firstImage} alt="images" />
                <img className="img2" src={secondImage} alt="images" />
                <img className="img3" src={thirdImage} alt="images" />
                <img className="img4" src={fourthImage} alt="images" />
                <img className="img5" src={fifthImage} alt="images" />
            </div>
            <div className="second-div">
                <img className="img6" src={firstImage} alt="images" />
                <div>
                    <h2>Welcome Address</h2>
                    <p>jfvhduilllllllllllllllllllllllllllllllllltrfszddddddscbnvjod;nzdftyrrrrrrrsdgbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkrfttgvjjjjjckmvxdrcfhgvjsdnfvkjxil;yhuogtifjvgkbsenldfmdlhbgvjfcgjhgcfvjhbjnkmexdgyyyyyycfhgvnhbnjsdfhuxcyigfthsdnjxuhkjluhkbdgycvjbknfdjxhbgjdnjmfnjxchbgvnxc         ghjvfchdgyjsehgfvtv</p>
                </div>
            </div>
        </div>
    )
}

export default Hero;