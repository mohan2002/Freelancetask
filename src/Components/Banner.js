import React, { useState } from 'react';
import "./Styles/Banner.css"

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

        </div>
    </div>
  );
}

export default Banner;
