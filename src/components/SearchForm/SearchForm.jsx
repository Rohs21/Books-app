
import React, {useRef, useEffect} from 'react';
import {FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import "./SearchForm.css";
import "./SearchForm.focused.css";
const SearchForm = () => {
  const {setSearchTerm, setResultTitle, setIsSearchFocused, isSearchFocused} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
      setIsSearchFocused(false);
    } else {
      setSearchTerm(searchText.current.value);
      setIsSearchFocused(true);
    }
    navigate("/book");
  };

  // Allow user to exit focused mode by clearing input
  const handleInputChange = (e) => {
    if (!e.target.value) {
      setIsSearchFocused(false);
    }
  };

  return (
    <div className={`search-form${isSearchFocused ? ' search-form-focused' : ''}`}>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input type = "text" className='form-control' placeholder='The Lost World ...' ref = {searchText} onChange={handleInputChange} />
              <button type = "submit" className='flex flex-c' onClick={handleSubmit}>
                <FaSearch className='text-purple' size = {32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm;