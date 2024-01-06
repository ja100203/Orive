import React from 'react'
import './Journal.css'
import Header from '../../components/About/Header'
import journal from '../../assets/images/div.blog-post-thumb.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Journal1 from '../../components/Journals/Journal1';
import BlogRead from '../../components/BlogRead/BlogRead';


function Journal({selectedJournal}) {
  return (
    <div>
    <Header
    Title="Journals"
    Description1="Home"
    Description2="Journals"
    />
    <section className='journals'>
    <div className='journalCnt'>
    <div className='journalTitle'>
    Machine Learning
    </div>
    <h4 className='jrnlDesc'>Machine Learning Trends Shaping Tomorrow's Technology Landscape</h4>
    <div className='cardInfo'>
            <div className='Info'>
              <FontAwesomeIcon icon={faUser} color='rgba(254, 93, 20, 1)' />
              <span>By Iqbal H. Sarker</span>
            </div>
            <div className='Info'>
              <FontAwesomeIcon icon={faCalendar} color='rgba(254, 93, 20, 1)' />
              <span>Jan 15, 2023</span>
            </div>
            </div>

            <div className='jrnyBtn'>
            <button>
                Learn More
                <FontAwesomeIcon icon={faArrowRight} color='white' />
            </button>
        </div>

    </div>
    <div className='journalImg'>
    <img src={journal} alt="" />
    </div>
    </section>
    <section className='journalType'>
    {selectedJournal === 'journal1' && <Journal1/>}
    {selectedJournal === 'journalDetail' && <BlogRead />}
  </section>

    </div>
  )
}

export default Journal
