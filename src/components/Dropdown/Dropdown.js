import React from 'react'
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import './Dropdown.css'
import { Link } from 'react-router-dom';


const Dropdown=({onDropdownItemClick})=> {
  return (
    <div className='dropdown'>
    <MDBDropdown>
    <MDBDropdownToggle style={{backgroundColor:'transparent', color:'black' ,borderStyle:'none', fontSize:'18px', fontWeight:'500'}}>Journal</MDBDropdownToggle>
    <MDBDropdownMenu>
      <MDBDropdownItem link>
      <Link to="/journal1" className="navBtn" onClick={() => onDropdownItemClick('journal1')}>
      Journal1
      </Link>
      </MDBDropdownItem>
      <MDBDropdownItem link>
      <Link to="/journal2" className="navBtn" onClick={() => onDropdownItemClick('blogRead')}>
      Journal Details
      </Link>

      </MDBDropdownItem>
      </MDBDropdownMenu>

  </MDBDropdown>

    </div>
  )
}

export default Dropdown




