import React from 'react';
import './HomePage.css';
import pic from "../../images/home.jpg";
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className='home-container'>
           <div className="content-wrap">
            <div className="dfd">
                <p className='discount'>Sale up to 70% off</p>
                <h2 className='hero-title'>New Collection For Fall</h2>
                <p className='short-info'>Discover all the new arrivals of ready-to-wear collection.</p>
                <Link to='/shop' className='btn-shop'>
                <button>SHOP NOW</button>
                </Link>
            </div>
            <div className="fdgdf">
                <img className='shop-img' src={pic} alt="" />
            </div>
            
           </div>
        </div>
    );
};

export default HomePage;