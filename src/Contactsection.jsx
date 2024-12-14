// import React from 'react'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const Contactsection = () => {
    const form = useRef();
    

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9ej8knt', 'template_1av40mo', form.current, {
        publicKey: 'NgTJfszNcxq6-ak_p',
      })
      .then(
        () => {
        //   console.log('SUCCESS!');
          alert('Message send Successfully we will contact you soon')
        },
        (error) => {
        //   console.log('FAILED...', error.text);
          alert('Message send failed try again later')
        },
      );
    };
  return (
    <div>
        <div class="eduhead">
             <span>CONTACT</span>
         </div>
         <div class="contactborder"> 
             <div class="conform">
                <div data-aos="fade-up" data-aos-anchor-placement="center-center">
                  <span>Just keep in touch!</span>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <div class="conformcontent">
                        <div class="forminput">
                         <div><input type="text" name="from_name" placeholder="NAME" required /></div>
                         <div><input type="email" name="email_id" placeholder="MAIL ID" required /></div>
                         <div><input type="text" name="subject" placeholder="SUBJECT" required /></div>
                         <div><textarea name="message" id="" cols="30" rows="10" placeholder="Message is"  required /></div>
                         <div class="formbtn" data-aos="fade-up"><button type="submit" value="Send">SUBMIT</button></div>
                        </div>
                    </div>
                 </form>
             </div>
             <div class="coninfo">
                 <div class="coninfoinfo" >
                     <div class="infohead" data-aos="fade-up" data-aos-anchor-placement="center-center">
                         <span >Contact Info</span>
                     </div>
                         <div class="infopara">
                             <span class="infosubhead">Address:</span>
                             <p class="infop" data-aos="zoom-in">New no: 35, perumal kovil street, arumbakkum, chennai-600106</p>
                         </div>
                         <div class="infopara">
                             <span class="infosubhead">Email id:</span>
                             <p class="infop" data-aos="zoom-in">happyworks.ajith@gmail.com</p>
                         </div>
                         <div class="infopara">
                             <span class="infosubhead">Mobile/whatsapp:</span>
                             <p class="infop" data-aos="zoom-in">+91 7010264055</p>
                         </div>
                 </div>
             </div>
         </div>
    </div>
  )
}
