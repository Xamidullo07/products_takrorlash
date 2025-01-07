import React from 'react'
import { Link, NavLink,useLocation } from 'react-router-dom'
import logo_img from "../img/logo.svg"
import './header.css'

const Header = () => {
  const {pathname} = useLocation()
  return (
    <>
      <div className={`header_blok ${pathname === "/company" ? "color" : ""}`}>
        <div className='header container'>
          <div className='header_logoimg'>
            <img src={logo_img} alt="" />
          </div>
          <ul className='header_link'>
            <NavLink className='header_itme' to={"/prodact"}>Prodact</NavLink>
            <NavLink className='header_itme' to={"/service"}>Service</NavLink>
            <NavLink className='header_itme' to={"/company"}>Company</NavLink>
            <NavLink className='header_itme' to={"/career"}>Career</NavLink>
            <a className='header_btn'>Clone project</a>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header