import React from 'react';
import banner from '../../../utilities/bannerbackground.jpg'
import './Banner.css'


const Banner = () => {
    
    
    const searchBtn = () => {
        let search = document.getElementById('search');
        search.style.width = "60%";
        search.style.transition = "1s";  
    }

    return (
        <div id="home">
            <div className="banner">
                <img src={banner} className="w-100 h-100" alt="" />
                <div className="inputField">
                    <div className="w-100">
                        <h1 className="px-5 py-2">Best Food is waiting for your belly</h1>
                        <div className="w-100 mx-auto">
                            <input id="search" placeholder="Search Food" type="text" name="" />
                            <button id="searchBTN" onClick={searchBtn}>Search</button>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Banner;