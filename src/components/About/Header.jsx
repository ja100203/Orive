import React from 'react'
import headerImg from '../../assets/images/people-taking-part-business-event 1.png'
import './Header.css'

function Header(props) {
  const { Title,Description1,Description2} = props;

  return (
    <div>
    <div className='header'>
    <div class="background-image"></div>
    <div class="overlay-image"></div>
    <div className='headerText'>
    <h3 className='headTitle'>{Title}</h3>
    <h4 className='headerdesc'>{Description1}<span style={{color:' rgba(247, 108, 36, 1)'}}> . {Description2}</span></h4>
    </div>
    </div>
    </div>
  )
}

export default Header
