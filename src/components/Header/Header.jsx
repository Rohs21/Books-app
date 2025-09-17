import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content'>
                <div className='header-hero'>
                    <h1 className='header-title'>Discover Your Next Great Read</h1>
                    <p className='header-subtitle'>Your Digital Library Awaits</p>
                    <p className='header-description'>
                        Explore millions of books from classic literature to contemporary bestsellers. 
                        Our comprehensive search engine helps you find exactly what you're looking for, 
                        whether it's a specific title, author, or genre that catches your interest.
                    </p>
                    <SearchForm />
                    
                    <div className='header-stats'>
                        <div className='stat-item'>
                            <span className='stat-number'>2M+</span>
                            <span className='stat-label'>Books Available</span>
                        </div>
                        <div className='stat-item'>
                            <span className='stat-number'>50K+</span>
                            <span className='stat-label'>Authors</span>
                        </div>
                        <div className='stat-item'>
                            <span className='stat-number'>100+</span>
                            <span className='stat-label'>Genres</span>
                        </div>
                    </div>

                    {/* <div className='features-grid'>
                        <div className='feature-item'>
                            <div className='feature-icon'>📚</div>
                            <h3 className='feature-title'>Vast Collection</h3>
                            <p className='feature-text'>Access millions of books across all genres and time periods</p>
                        </div>
                        <div className='feature-item'>
                            <div className='feature-icon'>🔍</div>
                            <h3 className='feature-title'>Smart Search</h3>
                            <p className='feature-text'>Find books by title, author, subject, or even specific themes</p>
                        </div>
                        <div className='feature-item'>
                            <div className='feature-icon'>⚡</div>
                            <h3 className='feature-title'>Instant Results</h3>
                            <p className='feature-text'>Get detailed book information and covers in seconds</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header