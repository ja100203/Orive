import React from 'react';
import './Posts.css'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Posts = (props) => {
    const { imageSrc, title, author } = props;

    return (
        <div className='post'>
           <div className='postImg'>
           <img src={imageSrc} alt="" width={150} height={120}/>
           </div> 
           <div className='postContent'>
           <h3>{title}</h3>
           <div className='Info'>
              <FontAwesomeIcon icon={faUser} color='rgba(254, 93, 20, 1)' />
              <span>By {author}</span>
            </div>
           </div>
        </div>
    );
}

export default Posts;
