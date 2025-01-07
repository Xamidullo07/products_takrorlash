import React from 'react'
import "./service.css"

const Service = () => {
  return (
    <>
      <div className='service_blok'>
          <div className='service container'>
             <div className='service_content'>
               <p className='service_title'>
               Our Services
               </p>
               <h1 className='service_subtitle'>
               We Build Software Solutionthat Solve Clients Business Challenges
               </h1>
               <p className='service_text'>
               Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.
               </p>
               <button className='service_btn'>Request A Quote →</button>
             </div>

             <div className='service_links'>
                <ul className='sevice_link'>
                  <li className='service_itme'>
                    <a href="#">Technical support</a>
                  </li>
                  <li className='service_itme'>
                    <a href="#">Development→</a>
                  </li>
                  <li className='service_itme'>
                    <a href="#">AWS/Azure </a>
                  </li>
                  <li className='service_itme'>
                    <a href="#">Consulting</a>
                  </li>
                  <li className='service_itme'>
                    <a href="#">Information Technology</a>
                  </li>
                </ul>
             </div>
          </div>
      </div>
    </>
  )
}

export default Service