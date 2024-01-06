import React from 'react'
import { useState } from 'react';
import './Navbar.css'
import { FaPhoneAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
 

const Navbar=({onDropdownItemClick})=> {
    const [hamBtn, setHamBtn] = useState(false);
    const handleHamClick=()=>{
      setHamBtn(!hamBtn);
    }
  return (
    <div>
    <div className="navbar">
    <div className="navImg"></div>
    <div className="navContent">
    <Link to="/" className='navBtn'>
    <span  className='navBtn'>Home</span>
    </Link>
    <Link to="/about" className="navBtn">
    <span >About Us</span>
    </Link>
    <Link to="/" className="navBtn">
    <span >Services</span>
    </Link>
    <Link to="/journal" className="navBtn">
    <Dropdown onDropdownItemClick={onDropdownItemClick}/>
    </Link>
    <Link to="/contact" className="navBtn">
    <span >Contact</span>
    </Link>
      <span className='callBtn'>
        <FaPhoneAlt className='callIcon'/>
        <span>
        <div className='phoneNum'>+91-9777798142</div>
        <div className='phoneTxt'>Make a call</div>
        </span>
      </span>
      <span className='connectBtn'>
        Let's Connect
      </span>
    </div>
    <div className='navHamBtn' onClick={handleHamClick}>
      {hamBtn?<RxCross2/>:<GiHamburgerMenu/>}
    </div>
  </div>
  <div >
    {hamBtn &&
  <div className="navContentTwo">
  <Link to="/" className='navBtn'>
  <span  className='navBtn'>Home</span>
  </Link>
  <Link to="/about" className="navBtn">
  <span >About Us</span>
  </Link>
  <Link to="/" className="navBtn">
  <span >Services</span>
  </Link>

  
  <Link to="/journal" className="navBtn">
  <Dropdown  onDropdownItemClick={onDropdownItemClick}/>
  </Link>
  <Link to="/contact" className="navBtn">
  <span >Contact</span>
  </Link>
      <span className='callBtn'>
        <FaPhoneAlt className='callIcon'/>
        <span>
        <div className='phoneNum'>+91-9777798142</div>
        <div className='phoneTxt'>Make a call</div>
        </span>
      </span>
      <span className='connectBtn'>
        Let's Connect
      </span>
    </div>}
  </div>

    </div>
  )
}

export default Navbar
