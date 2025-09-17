import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import "./Header.css";

const Header = () => {
    return (
        <div className='holder'>
            <header className='header'>
                <div className='header-content'>
                    <div className='header-hero'>
                        <h1 className='header-title'>Discover Your Next Great Read</h1>
                        <p className='header-subtitle'>Your Digital Library Awaits</p>
                        <p className='header-description'>
                            Explore millions of books from classic literature to contemporary bestsellers. 
                            Our comprehensive search engine helps you find exactly what you're looking for, 
                            whether it's a specific title, author, or genre that catches your interest.
                        </p>
                        {/* Only show SearchForm in hero on Home page, not duplicated at top */}
                        {window.location.pathname === '/' && <SearchForm />}
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
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;