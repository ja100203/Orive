import React from 'react'
import Cards from '../Cards/Cards'
import './Journal1.css'
import Blogs1 from '../../assets/images/div.blog-post-thumb.png'
import Blogs2 from '../../assets/images/div.blog-post-thumb (1).png'
import Blogs3 from '../../assets/images/div.blog-post-thumb (2).png'
import Posts from '../Posts/Posts'
import Post1 from '../../assets/images/div.blog-post-thumb.png'
import Post2 from '../../assets/images/div.blog-post-thumb (1).png'
import Post3 from '../../assets/images/div.blog-post-thumb (2).png'
import Post4 from '../../assets/images/div.blog-post-thumb (3).png'




function Journal1() {
  return (
    <div className='jounal1'>
    <div className='jrnalLeft'>
    <div className='jrnlTxt'>
    <h1>OUR BLOGS</h1>
    <h2>Read our Latest Blogs</h2>
    </div>
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
    <div className='jrnlPosts'>
    <h1>Recent Posts</h1>
    <div className='PostCard'>
    <Posts
imageSrc={Post1}
title='From Data to Discovery: Navigating the World of Data Science'
    author='Deanne Larson'
/>
<Posts
imageSrc={Post2}
title="Demystifying Fraud Detection: A Simple Guide for Security"
author="Yang Bao"
/>
<Posts
imageSrc={Post3}
title="Machine Learning Trends Shaping Tomorrow's Technology Landscape"
author="Iqbal H. Sarker"
/>
<Posts
imageSrc={Post4}
title="From Data to Discovery: Navigating the World of Data Science"
author="Deanne Larson"
/>

    </div>
    </div>
    </div>
    </div>
  )
}

export default Journal1
