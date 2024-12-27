import React from 'react'

export const Javawork = () => {
    const voice = ()=>{
        const newWindow = window.open('https://happy-works.github.io/voice-ai/', '_blank');
        if (newWindow) newWindow.focus();
       }
    
    const registrationform = ()=>{
        const newWindow = window.open('https://happy-works.github.io/registration-form/', '_blank');
        if (newWindow) newWindow.focus();
       }
    
    const developers141 = ()=>{
        const newWindow = window.open('https://happy-works.github.io/developers141/', '_blank');
        if (newWindow) newWindow.focus();
       }
  return (
        <div class="card1">
            <div class="workcard" data-aos="zoom-in-up">
                <div>
                    <img class="workcardimg" src={require("./asset/dev141.png")} />
                </div>
                <div class="workcardbtn">
                    <button>HTML</button>
                    <button>CSS</button>
                    <button>java script</button>
                </div>
                <div class="projecttext">
                    <span >Developers 141</span>
                    <p>Developers141 is a Group of Friends .We are more than just colleagues our love for creativity, innovation, and collaboration. Take a glimpse into our portfolio to see the magic we've created for our clients.</p>
                </div>
                <div>
                <button className='viewbtn' onClick={developers141}>View Project</button>
                </div>
            </div>
            <div class="workcard" data-aos="zoom-in-up">
                <div>
                    <img class="workcardimg" src={require("./asset/Voice.png")}/>
                </div>
                <div class="workcardbtn">
                    <button>HTML</button>
                    <button>CSS</button>
                    <button>java script</button>
                </div>
                <div class="projecttext">
                    <span >Voice Api</span>
                    <p>VoiceAI: A JavaScript project integrating a free API for text-to-speech conversion in multiple languages. Empowering dynamic voice interaction with versatile language support</p>
                </div>
                <div>
                <button className='viewbtn' onClick={voice}>View Project</button>
                </div>
            </div>
            <div class="workcard" data-aos="zoom-in-up">
                <div>
                    <img class="workcardimg" src={require("./asset/Reg form.png")}/>
                </div>
                <div class="workcardbtn">
                    <button>HTML</button>
                    <button>CSS</button>
                    <button>java script</button>
                </div>
                <div class="projecttext">
                    <span >Registration Form</span>
                    <p>EventReg: An HTML, CSS, and JavaScript site enabling admin registration and participant details viewing. Seamlessly designed, it streamlines event management with efficient form submission and data display</p>
                </div>
                <div>
                <button className='viewbtn' onClick={registrationform}>View Project</button>
                </div>
            </div>
        </div>
  )
}
