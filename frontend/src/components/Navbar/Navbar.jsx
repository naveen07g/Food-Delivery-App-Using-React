import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
    const [menu, setMenu] = useState("menu");
  return (
    <div className='navbar'>
      {/* <img src={assets.logo} alt="Logo Missing" /> */}
      <img src={assets.logo} alt="Logo Missing" className="logo" />
      <ul className="navbar-menu">
        <li onMouseEnter={() => setMenu("home")} className={menu==="home"?"active":""}>Home</li>
        <li onMouseEnter={() => setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
        <li onMouseEnter={() => setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</li>
        <li onMouseEnter={() => setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search Icon Missing" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="Basket icon Missing" />
            <div className="dot"></div>
        </div>
        <button className="signin"> SignIn</button>
      </div>
    </div>
  )
}

export default Navbar
