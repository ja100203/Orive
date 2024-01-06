import React from 'react'
import {  FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import './Footer.css'
import logo from '../../assets/images/Orive Logo 4.png'

function Footer() {
  return (
    <div className="footer">
    <div className="footerContainer">
      <div className="footerSubContainer">
        <div className="footerHead">Contact info</div>
        <div>
          <div className="footerContentSet">
            <div className="footerHighlightTextOne">Address:</div>
            <div className="footerNormalText">
              DCB-014, DLF Cyber City Rd, Chandaka Industrial Estate, Patia,
              Bhubaneswar, Odisha 751024,India
            </div>
          </div>
          <div className="footerContentSet">
            <div className="footerHighlightTextOne">Phone:</div>
            <div className="footerNormalText">+91-9777798142</div>
          </div>
          <div className="footerContentSet">
            <div className="footerHighlightTextOne">Email:</div>
            <div className="footerNormalText footerEmail">orivesolutions@gmail.com</div>
          </div>
        </div>
        <div className="inputContainer">
          <input placeholder="Enter your email" type="email" className="inputEmail"></input>
          <button className="subBtn">Subscribe</button>
        </div>
      </div>
      <div className="footerSubContainer">
        <div className="footerHead">IT Services</div>
        <div>
          <div className="footerNormalText">Bulk SMS</div>
          <div className="footerNormalText">Business Start-Up</div>
          <div className="footerNormalText">Web/App Development</div>
          <div className="footerNormalText">Enterprise Resources Planninng</div>
          <div className="footerNormalText">Human Resource Management</div>
          <div className="footerNormalText">Customer Relationship Management</div>
        </div>
      </div>
      <div className="footerSubContainer">
        <div className="footerHead">Quick links</div>
        <div>
          <div className="footerNormalText">About</div>
          <div className="footerNormalText">Blogs</div>
          <div className="footerNormalText">Terms & conditions</div>
          <div className="footerNormalText">Privacy policy</div>
          <div className="footerNormalText">Help & FAQ</div>
        </div>
      </div>
      <div className="footerSubContainer">
        <div>
        <img src={logo} alt="" width={200} height={50}/>
        </div>
        <div>
          <div className="footerNormalText">
            At Orive Solutions, we believe in the transformative power of
            technology. Our mission is to revolutionize industries, empower
            businesses, and enhance lives through cutting-edge IT solutions.
            Your Vision, Our Expertise, Together we Achieve Limitless Potential
          </div>
          <div className="footerContentSet">
            <div className="footerHighlightText">Follow us:</div>
            <div className="footerSocialIconsContainer">
                <div className="footerSocialIcons">
                    <FaFacebookF/>
                </div>
                <div className="footerSocialIcons">
                    <FaTwitter/>
                </div>
                <div className="footerSocialIcons">
                    <FaLinkedinIn/>
                </div>
                <div className="footerSocialIcons">
                    <FaInstagram/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr className="hrBorder"/>
    <div>Copyright <FaRegCopyright/> 2023 All Rights Reserved by <span className="footerHighlightText">Orive Solutions</span></div>
    <div/>
    </div>

  )
}

export default Footer

