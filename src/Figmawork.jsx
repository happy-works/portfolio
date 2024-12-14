import React from 'react'


export const Figmawork = () => {


   const saloon = ()=>{
    const newWindow = window.open('https://www.figma.com/proto/XxqT4Rx7uxrZLsiYSxhkDY/4_Saloon-(Single-Page)-(Copy)?type=design&node-id=201-2&t=SnVYXCVBmuhpd6bN-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design', '_blank');
    if (newWindow) newWindow.focus();
   }

   const bakery = ()=>{
    const newWindow = window.open('https://www.figma.com/proto/fQ8erCY5Gy1yRtaZd5Goyn/4_CAKE-(Single-Page)?type=design&node-id=1-2&t=ZsByyoHvVQ9Bv6JC-1&scaling=scale-down&page-id=0%3A1&mode=design', '_blank');
    if (newWindow) newWindow.focus();
   }

   const happyworks = ()=>{
    const newWindow = window.open('https://www.figma.com/proto/NYLzBQrYqgnHAchb0lAPSY/2_Comparrison-(Multi-Page)?type=design&node-id=35-731&t=7DNURguz0adBQtpo-1&scaling=scale-down&page-id=0%3A1&mode=design', '_blank');
    if (newWindow) newWindow.focus();
   }

   const developers = ()=>{
    const newWindow = window.open('https://www.figma.com/proto/TLhYyhE3hCwFEduDYzWvQy/Untitled?type=design&node-id=1-3&t=18Bj9upjh8lanelA-1&scaling=scale-down&page-id=0%3A1&mode=design', '_blank');
    if (newWindow) newWindow.focus();
   }

   const car = ()=>{
    const newWindow = window.open('https://www.figma.com/proto/nGSX8ZYOb4arQJyvRvoyxH/1_JAGUAR-(Multi-Page)?type=design&node-id=224-184&t=cQY5fFaQFdNo9dHE-1&scaling=contain&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design', '_blank');
    if (newWindow) newWindow.focus();
   }

   const vridhi = ()=>{
    const newWindow = window.open('https://www.figma.com/proto/ax4eh4skSYikHj9nfx4xXZ/Tanjore?type=design&node-id=37-2&t=gQRVNyEbjwBBOvhZ-1&scaling=scale-down&page-id=0%3A1&mode=design', '_blank');
    if (newWindow) newWindow.focus();
   }
  return (
        <div class="card1">
            <div class="workcard" data-aos="zoom-in-up">
                <div>
                    <img class="workcardimg" src={require("./asset/saloon.png")} />
                </div>
                <div class="workcardbtn">
                    <button>figma</button>
                </div>
                <div class="projecttext">
                    <span >The crystal saloon</span>
                    <p>The Crystal Salon: A sleek black-themed design combines elegant typography and psychology-driven colors for a sophisticated UI, ensuring clarity and allure in user experience</p>
                </div>
                <div>
                <button className='viewbtn' onClick={saloon}>View Project</button>
                </div>
            </div>
            
            <div class="workcard" data-aos="zoom-in-up">
                <div>
                  <img class="workcardimg" src={require("./asset/cake.png")}/>
                </div>
                <div class="workcardbtn">
                <button>figma</button>
                </div>
                <div class="projecttext">
                  <span >The Village Bakery</span>
                  <p>The Village Bakery: A warm, inviting single-page design featuring rustic typography, earthy color palette, and intuitive UI for a cozy user experience</p>
                </div>
                <div>
                <button className='viewbtn' onClick={bakery}>View Project</button>
                </div>
            </div>
            <div class="workcard" data-aos="zoom-in-up">
                <div>
                <img class="workcardimg" src={require("./asset/institute.png")}/>
                </div>
                <div class="workcardbtn">
                <button>figma</button>
                </div>
                <div class="projecttext">
                    <span >Happy Works</span>
                    <p>Happy Works: A dynamic comparison website showcasing institutions and their courses, emphasizing key features for informed decision-making and a joyful user experience.</p>
                </div>
                <div>
                <button className='viewbtn' onClick={happyworks}>View Project</button>
                </div>
            </div>
            <div class="workcard" data-aos="zoom-in-up">
                <div>
                <img class="workcardimg" src={require("./asset/dev141.png")}/>
                </div>
                <div class="workcardbtn">
                <button>figma</button>
                </div>
                <div class="projecttext">
                    <span >Developers 141</span>
                    <p>Developers141: A collective of friends united by creativity, innovation, and collaboration. Explore our portfolio to witness the magic we craft for our clients</p>
                </div>
                <div>
                <button className='viewbtn' onClick={developers}>View Project</button>
                </div>
            </div>
            <div class="workcard" data-aos="zoom-in-up">
                <div>
                    <img class="workcardimg" src={require("./asset/car.png")}/>
                </div>
                <div class="workcardbtn">
                <button>figma</button>
                </div>
                <div class="projecttext">
                    <span >jaquare site</span>
                    <p>Jaquare Cars: Discover the essence of luxury and innovation. Explore our range, craftsmanship, and commitment to excellence.</p>
                </div>
                <div>
                <button className='viewbtn' onClick={car}>View Project</button>
                </div>
            </div>
            <div class="workcard" data-aos="zoom-in-up">
                <div>
                <img class="workcardimg" src={require("./asset/tanjore.png")}/>
                </div>
                <div class="workcardbtn">
                <button>figma</button>
                </div>
                <div class="projecttext">
                    <span >Tanjore painting</span>
                    <p>Vridhi: Experience the timeless elegance of Tanjore painting. As a freelance endeavor, we bring this rich tradition to life through our bespoke website.</p>
                </div>
                <div>
                <button className='viewbtn' onClick={vridhi}>View Project</button>
                </div>
            </div>

        </div>
  )
}
