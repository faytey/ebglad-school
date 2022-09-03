import React from 'react';
import './Navbar.css';

function Navbar(){
    return (
        <div className='Navbar'>
            <div className='Reach-Us'>
                <a href="tel: +2348037850797">08037850797</a>
                {/* <a href="tel: +2348028842332">08028842332</a> */}
                <a href="mailto: ebgladschools@gmail.com">ebgladschools@gmail.com</a>
            </div>
            <div className='Nav-Items'>
                <a href="#">About Us</a>
                <a href="#">Schools</a>
                <a href="#">Academics</a>
                <a href="#">Admissions</a>
                <a href="#">Alumni</a>
                <a href="#">Contact</a>
            </div>
        </div>
    )
}

export default Navbar;