import React from 'react';
import Navbar from './Navbar/Navbar';
import SearchForm from './SearchForm/SearchForm';

const NavbarWrapper = ({ children }) => (
  <>
    <Navbar />
    <SearchForm />
    {children}
  </>
);

export default NavbarWrapper;
