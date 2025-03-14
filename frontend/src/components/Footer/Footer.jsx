import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="Logo Not available" />
                <p>A digital platform that allows users to browse menus, place orders, and manage food-related activities 
                    like delivery tracking and payment, connecting customers with restaurants or food providers.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="Facebook Icon not available" />
                    <img src={assets.twitter_icon} alt="Twitter Icon not available" />
                    <img src={assets.linkedin_icon} alt="LinkedIn Icon not available" />
                </div>
            </div>
            <div className="footer-content-right">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-center">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1 (469) 347-9812</li>
                    <li>naveen.gundala1994@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'> Copyright 2025 © Tomato.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer
