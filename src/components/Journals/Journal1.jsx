import React from 'react'
import Cards from '../Cards/Cards'
import Blogs1 from '../../assets/images/div.blog-post-thumb.png'
import Blogs2 from '../../assets/images/div.blog-post-thumb (1).png'
import Blogs3 from '../../assets/images/div.blog-post-thumb (2).png'


function Journal1() {
  return (
    <div className='jounal1'>
    <div className='jrnalLeft'>
    <h1>OUR BLOGS</h1>
    <h2>Read our Latest Blogs</h2>
    <div className='journalCard'>
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
    <div className='jrnalRight'>
    </div>
    </div>
  )
}

export default Journal1
