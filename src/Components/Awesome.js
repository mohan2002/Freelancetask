import React from 'react';
import "./Styles/Awesome.css"
function Awesome() {
  return (
    <div className='awesome-container'>
      <div className='awesome-hero'>
        <div className='awesome-heading'>
            <h1>We provide good development|Age your child</h1>
        </div>

        <div className='video'>
            <iframe className='vd' width="100%" height="315" src="https://www.youtube.com/embed/5L4DQfVIcdg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div>
          <button className='subscribe-here'>Subscribe here</button>
        </div>
      </div>
    </div>
  );
}

export default Awesome;
