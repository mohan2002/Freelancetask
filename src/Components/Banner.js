import React, { useState } from 'react';
import "./Styles/Banner.css"
import dimage from "../Assets/3d.jpg"

function Banner() {
    const[open,setopen] = useState(false);
  return (
    <div className='hero-container'>
        <div>
        <nav className='nav-container'>
            <div>
                <p className='Logo'>L<span className='color'>og</span>o</p>
            </div>
            <div className='right-nav'>
                <p>Courses</p>
                <p>Features</p>
                <p>Philosopies</p>
                <p>Entertainment</p>

                <button className='btn'>Learning</button>
            </div>

            <div className='responsive'>
                <i class="fas fa-bars bar" onClick={() => (setopen(!open))}></i>
            </div>

            
        </nav>
        {
            open && 
            <div className='navbar-res'>
                <p>Courses</p>
                <p>Features</p>
                <p>Philosopies</p>
                <p>Entertainment</p>

                <button className='btn'>Learning</button>
            </div>
        }
        </div>


        <div className='main-container'>
            <div className='main-inner'>
                <div className="right-content">
                    <h1 className="heading">Welcome to <span className='child'>Child's</span> Leadership Company</h1>
                    <p className="para"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                    <button className="explorebtn">Explore more</button>
                </div>
                <div className="dimages">
                    <img className="dimage" src={dimage}/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Banner;
