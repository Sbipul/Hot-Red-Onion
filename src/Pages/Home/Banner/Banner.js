import React from 'react';
import banner from '../../../utilities/bannerbackground.jpg'
import './Banner.css'


const Banner = () => {
    
    
    const searchBtn = () => {
        let search = document.getElementById('search');
        search.style.width = "40%";
        search.style.transition = "1s";  
    }

    return (
        <div id="home">
            <div className="banner">
                <img src={banner} className="w-100 h-100" alt="" />
                <div className="inputField">
                    <input id="search" placeholder="Search Food" type="text" name="" />
                    <button id="searchBTN" onClick={searchBtn}>Search</button>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Banner;