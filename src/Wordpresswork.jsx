import React from 'react'

export const Wordpresswork = () => {
    const cycle = ()=>{
        const newWindow = window.open('http://happywordpress.developers141.com/', '_blank');
        if (newWindow) newWindow.focus();
       }
    
       const garments = ()=>{
        const newWindow = window.open('http://garments.developers141.com/', '_blank');
        if (newWindow) newWindow.focus();
       }
    
       const paw = ()=>{
        const newWindow = window.open('https://pawwelfare.developers141.com/', '_blank');
        if (newWindow) newWindow.focus();
       }
  return (
        <div class="card1">
            <div class="workcard" data-aos="zoom-in-up">
                <div>
                    <img class="workcardimg" src={require("./asset/paw.png")} />
                </div>
                <div class="workcardbtn">
                    <button>wordpress</button>
                </div>
                <div class="projecttext">
                    <span >Paw welfare</span>
                    <p>PawWelfare: A WordPress platform supporting pet adoption. With available pet listings, it promotes compassionate connections between pets and caring individuals, fostering animal welfare</p>
                </div>
                <div>
                <button className='viewbtn' onClick={paw}>View Project</button>
                </div>
            </div>
            <div class="workcard" data-aos="zoom-in-up">
                <div>
                    <img class="workcardimg" src={require("./asset/garments.png")}/>
                </div>
                <div class="workcardbtn">
                <button>wordpress</button>
                </div>
                <div class="projecttext">
                    <span >Garments</span>
                    <p>Garments: A WordPress site dedicated to women's fashion. Curated collections, elegant design, and seamless navigation empower shoppers to discover and embrace their style effortlessly</p>
                </div>
                <div>
                <button className='viewbtn' onClick={garments}>View Project</button>
                </div>
            </div>
            <div class="workcard" data-aos="zoom-in-up">
                <div>
                    <img class="workcardimg" src={require("./asset/cycle.png")}/>
                </div>
                <div class="workcardbtn">
                <button>wordpress</button>
                </div>
                <div class="projecttext">
                    <span >Cycles</span>
                    <p>CycleHub: A WordPress site showcasing a range of bicycles. With detailed product listings and sleek design, it offers a user-friendly experience for enthusiasts and buyers alike</p>
                </div>
                <div>
                <button className='viewbtn' onClick={cycle}>View Project</button>
                </div>
            </div>
        </div>
  )
}
