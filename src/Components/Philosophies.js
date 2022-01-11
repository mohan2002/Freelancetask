import React from 'react';
import "./Styles/Philosophies.css"

function Philosophies() {
  return (
    <div className='philosophy-container'>
        <div className='philosophy-hero'>
          <div className='content'>
            <h1>Why we are awesome?</h1>
            <h1>Our Learning Philosophies</h1>
          </div>

          <div className='philosophy-boxes'>
            <div className='philosophy-box b1'>
              <div className='circle c1'>
                <i class="fas fa-radiation-alt"></i>
              </div>
              <h1 className='dummy-h1'>Dummy text</h1>
              <p className='dummy-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

            <div className='philosophy-box b2'>
              <div className='circle c2'>
                <i class="fas fa-user-graduate"></i>
              </div>
              <h1 className='dummy-h1'>Dummy text</h1>
              <p className='dummy-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

            <div className='philosophy-box b3'>
              <div className='circle c3'>
                <i class="fas fa-graduation-cap"></i>
              </div>
              <h1 className='dummy-h1'>Dummy text</h1>
              <p className='dummy-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

          </div>
        </div>
    </div>
  );
}

export default Philosophies;
