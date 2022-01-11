import React, { useState } from 'react';
import "./Styles/Explore.css"
import course from './courses';


function Explore() {
  const Agegroup = ["5 to 6","6 to 7","7 to 8","8 to 9","9 to 10","10 to 11","11 to 12","13 above"]
  const [ageselect,setAgeselect] = useState("5 to 6")
  console.log(course[ageselect]);
  return (
    <div className="explore-container">
      <div className="explore-hero">
        <div className='explore-heading'>
            <h1>Explore Our Learning Journeys by age group</h1>
        </div>

        <div className="agegroups">
            {
                Agegroup.map((item,index) => (
                    <div key={index} className={ageselect == item ? "ages ages-bg":"ages"} onClick={() => (setAgeselect(item))}>
                        <p>{item}</p>
                    </div>
                ))
            }
        </div>

        <div className="courses">
                <div className="course-box">
                    <div className="img-box">
                        <img src={course[ageselect].img[0]} className='one-image'/>
                    </div>
                    <div className="purple-box">
                        <p>{course[ageselect].txts[0]}</p>
                    </div>
                </div>

                <div className="course-box">
                    <div className="img-box">
                        <img src={course[ageselect].img[1]} className='one-image'/>
                    </div>
                    <div className="purple-box">
                        <p>{course[ageselect].txts[1]}</p>
                    </div>
                </div>

                <div className="course-box">
                    <div className="img-box">
                        <img src={course[ageselect].img[2]} className='one-image'/>
                    </div>
                    <div className="purple-box">
                        <p>{course[ageselect].txts[2]}</p>
                    </div>
                </div>

                <div className="course-box">
                    <div className="img-box">
                        <img src={course[ageselect].img[3]} className='one-image'/>
                    </div>
                    <div className="purple-box">
                        <p>{course[ageselect].txts[3]}.</p>
                    </div>
                </div>
            </div>
      </div>

      <div>
          <button className='subscribe-here'>Subscribe here</button>
      </div>



    </div>
  );
}

export default Explore;
