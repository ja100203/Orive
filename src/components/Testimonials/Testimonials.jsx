import React from 'react';
import testimonial from '../../assets/images/Group 67 (1).png'
import tstsymbol from '../../assets/images/Symbol.png'
import '../Testimonials/Testimonials.css'

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div className='tstimonialContent'>
            <h3>TESTIMONIALS</h3>
            <h1>What Our Client Say’s</h1>
            <img src={tstsymbol} alt="" height={40} />
            <div className='tstimonialTxt'>
            There are many varation of paissages of Lorem as the Ipum available but
our majority have sufferied alterations in some form, by our by injected
hsumour randomised worids which don't looks even slightly there as
believable. If you going to use a passage of Lorem Ipsum.
            </div>
            </div>
            <div className='tstimonialImg'>
            <img src={testimonial} alt="" />
            </div>
        </div>
    );
}

export default Testimonials;
