import React from 'react'
import Header from '../../components/About/Header'
import missionImg from '../../assets/images/Group 75.png'
import team1 from '../../assets/images/team-1.jpg.png'
import team2 from '../../assets/images/team-3.jpg.png'
import story from '../../assets/images/Image.png'
import story1 from '../../assets/images/div.icon.png'
import story2 from '../../assets/images/div.icon (1).png'
import './About.css'
import Testimonials from '../../components/Testimonials/Testimonials'

function About() {
  return (
    <div>
      <Header
        Title="Who We Are?"
        Description1="Home"
        Description2="About"
      />
      <section className='mission'>
        <div className='missionText'>
          <div className='missionCaption'>OUR MISSION</div>
          <div className='missionHeader'>Empowering Business Excellence Through Innovative IT Solutions</div>
          <div className='missionContent'>At Orive Solutions, our mission is to be the driving force behind business success by providing innovative and tailored IT solutions. We strive to empower organizations with cutting-edge technologies that enhance efficiency, foster innovation, and fuel sustainable growth. Our commitment is to be a trusted partner on every step of our clients' digital transformation journey.</div>
          <div className='missionExtra'>
            <ul className='vu'>
              <li className='vl'>Delivering unparalleled IT solutions that exceed client expectations.</li>
              <li className='vl'>Fostering culture of innovation to stay ahead dynamic tech landscape.</li>
              <li className='vl'>Building enduring partnerships based on trust and mutual success.</li>
            </ul>
          </div>
          <div className='abtbtn'>
            <button>Get Started</button>
          </div>
        </div>
        <div className='missionImage'>
          <img src={missionImg} alt="" />
        </div>
      </section>

      <section className='story'>
        <div className='storybg'></div>
        <div className='storyImg'>
          <img src={story} alt="" />
        </div>
        <div className='storyContent'>
          <div className='storyHead'>Our Story</div>
          <div className='storyTxt'>
            5+ Years of Pioneering Excellence in IT Services
            <br />
            <br />
            Established in 2018, Orive Solutions has evolved into a dynamic force in the IT services sector.
            Over the past 5+ years, we have consistently delivered high-quality solutions, earning the trust of a diverse clientele.
            Our journey reflects a commitment to excellence, a passion for technology, and a dedication to the success of our clients.
          </div>
          <div className='storyExtra'>
            <div className='storyCase'>
              <div>
                <img src={story1} width={40} height={40} alt="" />
              </div>
              <div>We have more than 5 years of experiences</div>
            </div>
            <div className='storyCase'>
              <div>
                <img src={story2} width={40} height={40} alt="" />
              </div>
              <div>We use professional and experienced person</div>
            </div>
          </div>
        </div>
      </section>

      <section className='vission'>
        <div className='vissionImg'>
          <img src={missionImg} alt="" />
        </div>
        <div className='vissionText'>
          <div className='vissionCaption'>OUR VISION</div>
          <div className='vissionHeader'>Shaping the Future of Digital Transformation</div>
          <div className='vissionContent'>At Orive Solutions, we envision a future where we are at the forefront of digital evolution, setting industry standards and pioneering transformative technologies. Our vision is to be the go-to partner for businesses seeking innovative and sustainable IT solutions. We aspire to lead the way in anticipating and meeting the ever-changing needs of our clients in the rapidly evolving digital landscape.</div>
          <div className='vissionExtra'>
            <ul className='vu'>
              <li className='vl'>Setting industry benchmarks for innovation and technological excellence.</li>
              <li className='vl'>Anticipating and adapting to emerging trends to stay ahead of the curve.</li>
              <li className='vl'>Continuously enhancing our offerings to provide unparalleled to clients.</li>
            </ul>
          </div>
          <div className='abtbtn'>
            <button>Get Started</button>
          </div>
        </div>
      </section>

      <section className='team'>
        <div className='teamMain'>
          <div className='teamCaption'>OUR TEAM</div>
          <div className='teamContent'>
            We are a team of IT services and technologies specialists
          </div>
          <div className='teamProfile'>
            <img src={team1} alt="" />
            <img src={team2} alt="" />
          </div>
        </div>
      </section>

      <section>
        <Testimonials />
      </section>
    </div>
  )
}

export default About
