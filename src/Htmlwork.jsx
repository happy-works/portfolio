import React from 'react'

export const Htmlwork = () => {
    const hsaloon = ()=>{
        const newWindow = window.open('https://happy-works.github.io/the-crystal-saloon/', '_blank');
        if (newWindow) newWindow.focus();
       }
    
       const hhappyworks = ()=>{
        const newWindow = window.open('https://happy-works.github.io/happy-works/', '_blank');
        if (newWindow) newWindow.focus();
       }
  return (
    <div class="card1">
            <div class="workcard" data-aos="zoom-in-up">
                <div>
                    <img class="workcardimg" src={require("./asset/hsaloon.png")} />
                </div>
                <div class="workcardbtn">
                    <button>HTML</button>
                    <button>CSS</button>
                </div>
                <div class="projecttext">
                    <span >The Crystal Saloon</span>
                    <p>The Crystal Salon: An HTML and CSS creation, featuring sophisticated design elements, elegant typography, and psychology-driven colors, ensuring a captivating and clear user experience</p>
                </div>
                <div>
                <button className='viewbtn' onClick={hsaloon}>View Project</button>
                </div>
            </div>
            
            <div class="workcard" data-aos="zoom-in-up">
                <div>
                  <img class="workcardimg" src={require("./asset/institute.png")}/>
                </div>
                <div class="workcardbtn">
                  <button>HTML</button>
                  <button>CSS</button>
                </div>
                <div class="projecttext">
                  <span >Happy Works</span>
                  <p>Happy Works: Crafted solely with HTML and CSS, this dynamic comparison website prioritizes key features, aiding informed decisions and fostering joyful user experiences across institutions and courses</p>
                </div>
                <div>
                <button className='viewbtn' onClick={hhappyworks}>View Project</button>
                </div>
            </div>
        </div>
  )
}
