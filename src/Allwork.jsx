import React from 'react'

export const Allwork = () => {
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
       const hsaloon = ()=>{
        const newWindow = window.open('https://saloon.developers141.com/', '_blank');
        if (newWindow) newWindow.focus();
       }
    
       const hhappyworks = ()=>{
        const newWindow = window.open('https://happyworks.developers141.com/', '_blank');
        if (newWindow) newWindow.focus();
       }
    const voice = ()=>{
        const newWindow = window.open('https://voice.developers141.com/', '_blank');
        if (newWindow) newWindow.focus();
       }
    
    const registrationform = ()=>{
        const newWindow = window.open('https://eventform.developers141.com/', '_blank');
        if (newWindow) newWindow.focus();
       }
    
    const developers141 = ()=>{
        const newWindow = window.open('https://developers141.com/', '_blank');
        if (newWindow) newWindow.focus();
       }
       const Bootbakery = ()=>{
        const newWindow = window.open('https://villagebakery.developers141.com/', '_blank');
        if (newWindow) newWindow.focus();
       }
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
       const qrcode = ()=>{
        const newWindow = window.open('https://qrcode.developers141.com/', '_blank');
        if (newWindow) newWindow.focus();
       }
  return (
    <div>
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

            <div class="workcard" data-aos="zoom-in-up">
                <div>
                    <img class="workcardimg" src={require("./asset/qr.png")} />
                </div>
                <div class="workcardbtn">
                    <button>react</button>
                    <button>HTML</button>
                    <button>CSS</button>
                    <button>java script</button>
                </div>
                <div class="projecttext">
                    <span >QR Code Generator</span>
                    <p>QRGen: A React-based web app empowering users to effortlessly generate QR codes. Seamlessly designed and developed for swift, intuitive QR code creation and customization.</p>
                </div>
                <div>
                <button className='viewbtn' onClick={qrcode}>View Project</button>
                </div>
            </div>
        </div>
    </div>
  )
}
