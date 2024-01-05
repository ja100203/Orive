import React from 'react'
import './Submit.css'

function Submit() {
  return (
    <div className='submit'>
    <form id="contact" action="" method="post">
      <h3>Get A Quote</h3>
      <fieldset>
        <input placeholder="Your name" type="text" tabindex="1" required autofocus/>
      </fieldset>
      <fieldset>
        <input placeholder="Your Email Address" type="email" tabindex="2" required/>
      </fieldset>
      <fieldset>
          <select id="department-selection" name="concerned_department" required>
        <option value="">Select service</option>
        <option value="billing">Billing</option>
        <option value="marketing">Marketing</option>
        <option value="technical support">Technical Support</option>
    </select>

      </fieldset>
      <fieldset>
        <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
      </fieldset>
      <fieldset>
        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
      </fieldset>
    </form>
  </div>
  )
}

export default Submit
