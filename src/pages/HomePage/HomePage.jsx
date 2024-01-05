import React from 'react'
import './HomePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Cards1 from '../../assets/images/Group 28 (2).png';
import cmpnyImg from '../../assets/images/Group 17 (2).png';
import cmpny1 from '../../assets/images/customer-service.png';
import cmpny2 from '../../assets/images/quality.png';
import Testimonials from '../../components/Testimonials/Testimonials';
import Cards from '../../components/Cards/Cards';
import Blogs1 from '../../assets/images/div.blog-post-thumb.png'
import Blogs2 from '../../assets/images/div.blog-post-thumb (1).png'
import Blogs3 from '../../assets/images/div.blog-post-thumb (2).png'


function HomePage() {
    return (
        <div>
            <div className='header'>
                <div class="background-image"></div>
                <div class="overlay-image"></div>
                <div className='homePageText'>
                    <h3>Affordable Big IT & Technology Solutions</h3>
                    <h4>Orive Solutions brings the innovative requirements, conduct through research, assess your needs, and consider consulting
                        with IT professionals or experts to find the most suitable and cost-effective options for your business.</h4>
                    <div className='homeBtn'>
                        <button>
                            Request Free Consultation
                            <FontAwesomeIcon icon={faArrowRight} color='white' />
                        </button>
                    </div>
                </div>
                <div className='homeCards'>
                    <img src={Cards1} alt="" />
                    <img src={Cards1} alt="" />
                    <img src={Cards1} alt="" />
                </div>
            </div>

            <section className='abtCompany'>
                <div className='cmpnyImg'>
                    <img src={cmpnyImg} alt="" />
                </div>
                <div className='cmpnytxt'>
                    <div className='cmpnycontent'>
                        <h4>ABOUT OUR COMPANY</h4>
                        <h3>We formed the IT service in 2018
                            based on client requirements</h3>
                        <h5>We're not just service providers; we're strategic partners committed to propelling your
                            business forward. Contact us for a transformative journey in the digital landscape.</h5>
                        <div className='cmpnyXtra'>
                            <div className='cmpny1'>
                                <div className='cmpny1Img'>
                                    <img src={cmpny1} alt="" width={40} />
                                </div>
                                <div className='cmpny1Txt'>
                                    <h1>24/7 User Support</h1>
                                    <h2>Vestibulum ac diam sit amet
                                        quam vehicula elementum sed
                                        sit amet du</h2>
                                </div>
                            </div>
                            <div className='cmpny1'>
                                <div className='cmpny1Img'>
                                    <img src={cmpny2} alt="" width={40} />
                                </div>
                                <div className='cmpny1Txt'>
                                    <h1>5+ Years of Experience</h1>
                                    <h2>Vestibulum ac diam sit amet
                                        quam vehicula elementum sed
                                        sit amet du</h2>
                                </div>
                            </div>
                        </div>
                        <div className='cmpnyBtn'>
                            <button>
                                Learn More
                                <FontAwesomeIcon icon={faArrowRight} color='white' />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='homeBlogs'>
            <div className='blogsContent'>
            <div className='blogsTitle'>
            <span style={{color:'rgba(247, 108, 36, 1)'}}>OUR BLOG</span>
            <h4>Read our Latest Blogs</h4>
            </div>
            <div className='blogsCard'>
           <Cards 
        imageSrc={Blogs1} 
        title="Machine Learning"
        author="By Iqbal H. Sarker"
        date="Jan 15, 2023"
        content="Machine Learning Trends Shaping Tomorrow's Technology Landscape"
      />
            <Cards
            imageSrc={Blogs2} 
            title="Data Science"
            author="By Deanne Larson"
            date="Feb 26, 2023"
            content="From Data to Discovery: Navigating the World of Data Science"
            />
            <Cards
            imageSrc={Blogs3} 
            title="Fraud Detection"
            author="By Yang Bao"
            date="Mar 18, 2023"
            content="Demystifying Fraud Detection: A Simple Guide for Security"
            />
            </div>
            </div>
            </section>

            <section>
            <Testimonials/>
            </section>
        </div>

    )
}

export default HomePage
