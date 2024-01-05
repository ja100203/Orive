import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Cards.css'

function Cards(props) {
  const { imageSrc, title, author, date, content, readMoreLink } = props;

  return (
    <div className='cardOuter'>
      <div className='cardInner'>
        <div className='cardImage'>
          <img src={imageSrc} alt="" />
        </div>
        <div className='cardContent'>
          <div className='cardHeader'>
            <h3>{title}</h3>
          </div>
          <div className='cardInfo'>
            <div className='Info'>
              <FontAwesomeIcon icon={faUser} color='rgba(254, 93, 20, 1)' />
              <span>{author}</span>
            </div>
            <div className='Info'>
              <FontAwesomeIcon icon={faCalendar} color='rgba(254, 93, 20, 1)' />
              <span>{date}</span>
            </div>
          </div>
          <h3>{content}</h3>
          <hr className='solid' />
          <div className='More'>
            <a href={readMoreLink} target="_blank" rel="noopener noreferrer">
              <span>Read More</span>
              <FontAwesomeIcon icon={faArrowRight} color='rgba(254, 93, 20, 1)' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

