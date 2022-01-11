import React from 'react';
import './Styles/Ourcourses.css'

function Ourcourses() {
  return (
    <div className="courses-hero">
        <div className="courses-container">
            <div className="course-heading">
                <h1>Our Courses</h1>
            </div>
            <div className="course-cards">
                <div className="bg-color">
                    <div className="card1"> 
                        <i class="fas fa-tree"></i>
                        <p>Natural Science</p>
                    </div>
                </div>
                <div className="bg-color bg-color2">
                    <div className="card1"> 
                        <i class="fas fa-hand-holding-heart"></i>
                        <p>Public speaking</p>
                    </div>
                </div>
                <div className="bg-color bg-color3">
                    <div className="card1"> 
                        <i class="fas fa-brain"></i>
                        <p>Aptitude</p>
                    </div>
                </div>
                <div className="bg-color bg-color4">
                    <div className="card1"> 
                        <i class="fas fa-book-reader"></i>
                        <p>Reading skill</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Ourcourses;
