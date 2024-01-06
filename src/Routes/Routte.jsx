import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import HomePage from '../pages/HomePage/HomePage';
import About from '../pages/About/About';
import Journal from '../pages/Journal/Journal';
import Journal1 from '../components/Journals/Journal1';
import BlogRead from '../components/BlogRead/BlogRead';
import Contact from '../pages/Contact/Contact';


function Routte() {
    const [selectedJournal, setSelectedJournal] = useState('journalType');

    const handleDropdownItemClick = (journalType) => {
      setSelectedJournal(journalType);
    };
  return (
    <Router>
    <div>
      <Navbar onDropdownItemClick={handleDropdownItemClick}/>
<Routes>
<Route path="/" exact element={<HomePage/>} />
<Route path="/about" exact element={<About/>} />
<Route path="/journal" exact element={<Journal/>} />
<Route path="/contact" exact element={<Contact/>} />
<Route path="/journal1" exact element={<Journal1/>} />
<Route path="/journal2" exact element={<BlogRead/>} />
</Routes>
      <Footer/>
    </div>
    </Router>
  )
}

export default Routte
