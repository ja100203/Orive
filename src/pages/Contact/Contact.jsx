import React from 'react'
import TextField from "@mui/material/TextField"
import DialogContent from "@mui/material/DialogContent";
import './Contact.css'
import line from '../../assets/images/Vector 2.png'
import line1 from '../../assets/images/Vector 1.png'

function Contact() {
  return (
    <div className='contact'>
    <div className='contactLeft'>
      <div className='contactForm'>
      <div className="form-part" style={{overflowX:'hidden'}}>
      <DialogContent style={{overflowX:'hidden'}}>
        <form action="" className="form-blog">
          <h4 className="need-help">Reach Us</h4>

          <TextField style={{border:'1px solid rgba(204, 204, 204, 1)',borderRadius:'5px'}}
            margin="dense"
            placeholder="Enter your name"
            type="text"
            fullWidth
            name="name"
            id="name"
            required
          />
          <TextField style={{border:'1px solid rgba(204, 204, 204, 1)',borderRadius:'5px'}}
            margin="dense"
            placeholder="Email address"
            type="email"
            fullWidth
            name="email"
            id="email"
            required
          />
          <TextField style={{border:'1px solid rgba(204, 204, 204, 1)',borderRadius:'5px'}}
          placeholder="Select service"
            margin="dense"
            type="text"
            select
            fullWidth
            name="employeeName"
            id="employeeName"
            required
            defaultValue="Select Service"
          >
            <option value="" label="Select Service">Select Service</option>
          </TextField>
          <textarea style={{width:'100%', borderRadius:'5px', padding:'10px 0 0 10px', border:'1px solid rgba(204, 204, 204, 1)'}} name="" id="" cols="30" rows="7" placeholder="Message"></textarea>
          <button className="submit-blog-read">Submit</button>
        </form>
      </DialogContent>
    </div>
    </div>
      </div>
      <div className='midcontact'>
      <img   src={line1} alt=""  />
</div>
      <div className='contactRight'>
      <div className='contactTxt'>
      <span className='contactTitle'>Address:</span>
      <span className='contactDesc'>DCB-014, DLF Cyber City Rd, Chandaka Industrial Estate, Patia, Bhubaneswar, Odisha 751024,India</span>
      </div>
      <img src={line} alt="" />

      <div className='contactTxt'>
      <span className='contactTitle'>Phone Number:</span>
      <span className='contactDesc'>+91-9777798142</span>
      </div>
      <img src={line} alt="" />

      <div className='contactTxt'>
      <span className='contactTitle'>Email Us:</span>
      <span className='contactDesc'>   orivesolutions@gmail.com
      <br />
      info@orivesolutions.com</span>
      </div>

      </div>
    </div>
  )
}

export default Contact
