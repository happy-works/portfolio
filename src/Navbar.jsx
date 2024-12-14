import React, { useState } from 'react'
import { Contactsection } from './Contactsection';
import { Works } from './Works';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..



export const Navbar = () => {
  const [burgerlist, setBurgerlist] = useState(false);
  const [mode, setMode] = useState(false);

  AOS.init({duration:1000});

  const togglemode = ()=>{
    setMode(prevState => !prevState);
  };
  const toggleListing = () => {
    setBurgerlist(prevState => !prevState); // Toggle the value of burgerlist
  };
  return (
    <div className={`App ${mode ? 'dark' : ''}`}>
          
      <nav className='h'>
      <img src={mode ? require("./asset/light.png") : require("./asset/dark.png")} onClick={togglemode} class="bat" id="bat"  />
        <div class="header">
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#education">Certificates</a>
        <a href="#works">Projects</a>
        <a href="#contact">Contact</a>
        </div>
        
        <img className='blogo ' src={ require("./asset/solid_bars.png")} onClick={toggleListing} alt="" />
        {burgerlist && (<div className='blist'>
                        <div><a href="#home">Home</a></div>
                        <div><a href="#skills">Skills</a></div>
                        <div><a href="#education">Certificates</a></div>
                        <div><a href="#works">Projects</a></div>
                        <div><a href="#contact">Contact</a></div>
                        </div>)}
      </nav> 
      <section id="home">
        <div class="herosec" >
            <div class="herocon" data-aos="fade-left" data-aos-duration="2000">
                <div class="herot1"><span >Hey there,</span></div>
                <div class="herot2"><span >I am HARIKRISHNAN N</span></div>
                <div class="herot3"><span>Creative Web Developer</span></div>
                <div><button class="herobtn"><a href="https://drive.google.com/file/d/1n2y3O9hBM4MMg4h8a9d1G9Mc9jxKxfP2/view?usp=drive_link" target='_blank' rel="noopener noreferrer" >Open/Download CV</a></button></div>
            </div>
            <img src={require("./asset/hero.png")} />
        </div>
    </section>
    <section id="skills">
        <div>
            <div class="skillsec">
                <img class="skillimg"  src={require("./asset/skill1.png")} />
                <div class="skillcon" data-aos="fade-up" data-aos-duration="2000">
                    <div class="skillt1"><span >My Skills</span></div>
                    <div class="skillt2"><span >Things i can implement with my projects</span></div>
                    <div class="skillt2"><span >These are the things i implemented my previous projects</span></div>
                    <div class="skillbtndiv"><button class="skillbtn"><a href="#contact">Contact Me</a></button></div>
                </div>
                
            </div>
        </div>
        <div class="slist">
            <div class="w100">
                <div class="frontend">
                    <span class="listhead">Frontend</span>
                    <ul class="listimg">
                        <li><img data-aos="flip-left" src={require("./asset/f1.webp")}/><p class="lip" data-aos="flip-right">HTML</p></li>
                        <li><img data-aos="flip-left" src={require("./asset/f2.webp")}/><p class="lip" data-aos="flip-right">CSS</p></li>
                        <li><img data-aos="flip-left" src={require("./asset/f3.png")}/><p class="lip" data-aos="flip-right">Java Script</p></li>
                        <li><img data-aos="flip-left" src={require("./asset/f4.png")}/><p class="lip" data-aos="flip-right">Material UI</p></li>
                        <li><img data-aos="flip-left" src={require("./asset/f5.webp")}/><p class="lip" data-aos="flip-right">Bootstrap</p></li>
                        <li><img data-aos="flip-left" src={require("./asset/f6.png")}/><p class="lip" data-aos="flip-right">Jquery library</p></li>
                        <li><img data-aos="flip-left" src={require("./asset/f8.png")}/><p class="lip" data-aos="flip-right">Wordpress</p></li>
                        <li><img data-aos="flip-left" src={require("./asset/f9.png")}/><p class="lip" data-aos="flip-right">React</p></li>
                    </ul>
                </div>
            </div>
            <div class="w100">
                <div class="Design">
                    <span>Design</span>
                    <ul class="listimg">
                        <li><img data-aos="flip-right" src={require("./asset/d1.webp")} /><p class="lip" data-aos="flip-left">HTML</p></li>
                        <li><img data-aos="flip-right" src={require("./asset/d2.webp")} /><p class="lip" data-aos="flip-left">PHOTO SHOP</p></li>
                    </ul>
                </div>
                <div class="backend">
                    <span>Backend</span>
                    <ul class="listimg">
                        <li><img data-aos="flip-right" src={require("./asset/b2.webp")}  /><p class="lip" data-aos="flip-left">Node JS</p></li>
                        <li><img data-aos="flip-right" src={require("./asset/b3.png")}  /><p class="lip" data-aos="flip-left">Express</p></li>
                        <li><img data-aos="flip-right" src={require("./asset/b4.png")}  /><p class="lip" data-aos="flip-left">MongoDB</p></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section id="works">
        <div class="workhead">
            <span>WORKS</span>
        </div>
        <Works></Works>
    </section>
     <section id="education">
         <div class="eduhead">
             <span>EDUCATION</span>
         </div>
         <div class="education" data-aos="zoom-in-right">
             <div class="edutext">
                 <span>Government Higher Secoundry School</span>
                 <p class="class">X (sslc) 2014</p>
                 <p class="classp">I have done my 10th Std (sslc) at Government Higher Soundary School, arumbakkam chennai-600106</p>
             </div>
             <img src={require("./asset/Group 96.png")} alt=""/>
         </div>
         <div class="education" data-aos="zoom-in-left">
             <img src={require("./asset/books-clipart-hand-drawn-school-illustration-for-print-web-design-decor-logo-vector-removebg-preview.png")} alt=""/>
             <div class="edutext">
                <span>Government Higher Secoundry School</span>
                 <p class="class">XII (hsc) 2017</p>
                 <p class="classp">I have done my 12th Std (hsc) at Government Higher Soundary School, arumbakkam chennai-600106</p>
             </div>
         </div>
         <div class="education" data-aos="zoom-in-right">
             <div class="edutext">
                 <span>SRM institute of science and technology</span>
                 <p class="class">Bsc (Computer Science) 2020</p>
                 <p class="classp">I have done my Bsc (cs) at SRM institute of science and technology, ramapuram, chennai</p>
             </div>
             <img src={require("./asset/pngtree-graduation-cap-with-scroll-and-scroll-clipart-vector-png-image_12249148_1-removebg-preview-transformedgv.png")} alt=""/>
         </div>
         <div class="education" data-aos="zoom-in-left">
             <img src={require("./asset/pngtree-graduation-cap-vector-png-image_12162632_1-transformed-removebg-preview.png")} alt=""/>
             <div class="edutext">
                 <span>Dr MGR institute of science and technology</span>
                 <p class="class">Msc (Computer Science) 2023</p>
                 <p class="classp">I have done my Msc (cs) at Dr MGR institute of science and technology, adayalampattu, chennai</p>
             </div>
         </div>
     </section>
     <section id="contact">
       <Contactsection/>
     </section>
     <div class="g"></div>
     <footer class="footer" id="footer">
         <span>HARIKRISHNAN N</span>
         <div class="footerlink">
             <a href="#home">Home</a>
             <a href="#skills">Skills</a>
             <a href="#education">Certificates</a>
             <a href="#works">Projects</a>
             <a href="#contact">Contact</a>
         </div>
         <span>@copyrights designed & developed by HARIKRISHNAN All rights reserved</span>
     </footer>  
    </div>
  )
}
