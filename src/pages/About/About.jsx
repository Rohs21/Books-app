import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Welcome to My Books
            "Discover a world of stories, knowledge, and inspiration. Search for your favorite books, explore new genres, and find everything you need to fuel your reading journey. Dive in and let the adventure begin!</p>
            <p className='fs-17'>Made with love by~ Rohan Singh</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
