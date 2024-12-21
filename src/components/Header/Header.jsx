import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <Header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>"My Books App is an online library where users can explore a vast collection of books across various genres. It allows users to search for any book, view detailed information, and discover new favorites effortlessly. Built using React, the app delivers a fast, responsive, and interactive experience, making it a perfect platform for book lovers to dive into an extensive world of literature."</p>
                <SearchForm />
            </div>
        </Header>
    </div>
  )
}

export default Header