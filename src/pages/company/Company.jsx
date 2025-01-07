import React from 'react'
import "./company.css"
const Company = () => {
  return (
    <>
      <div className='company_blok'>
         <div className='company container'>
            <div className='company_content'>
               <p className='company_title'>
               Company
               </p>
               <h1 className='company_subtitle'>
               Award-winning Company seen and used by millions around the world.
               </h1> 
               <p className='company_text'>
               It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. 
               </p>
            </div>
            <div className='company_img'>
               <ul className='company_list'>
                <li className='company_itme'>
                  <img src="../public/company1.png" alt="" />
                </li>
                <li className='company_itme'>
                  <img src="../public/company2.png" alt="" />
                </li>
                <li className='company_itme'>
                  <img src="../public/company3.png" alt="" />
                </li>
               </ul>
            </div>
         </div>
      </div>
    </>
  )
}

export default Company