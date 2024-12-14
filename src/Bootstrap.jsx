import React from 'react'

export const Bootstrap = () => {
    const Bootbakery = ()=>{
        const newWindow = window.open('https://villagebakery.developers141.com/', '_blank');
        if (newWindow) newWindow.focus();
       }
  return (
        <div class="card1">
            <div class="workcard" data-aos="zoom-in-up">
                <div>
                    <img class="workcardimg" src={require("./asset/cake.png")}/>
                </div>
                <div class="workcardbtn">
                    <button>HTML</button>
                    <button>CSS</button>
                    <button>BOOTSTRAP</button>
                </div>
                <div class="projecttext">
                    <span >The Village Bakery</span>
                    <p>The Village Bakery: A Bootstrap-powered single-page design exuding warmth with rustic typography and earthy tones. Its intuitive UI ensures a cozy, inviting user journey</p>
                </div>
                <div>
                <button className='viewbtn' onClick={Bootbakery}>View Project</button>
                </div>
            </div>
        </div>
  )
}
