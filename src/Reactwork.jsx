import React from 'react'

export const Reactwork = () => {
    const qrcode = ()=>{
        const newWindow = window.open('https://happy-works.github.io/Qr-code-generator/', '_blank');
        if (newWindow) newWindow.focus();
       }
  return (
        <div class="card1">
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
  )
}
