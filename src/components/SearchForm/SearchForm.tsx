import React, { useEffect } from 'react';
import './SearchForm.css';
import {FaSearch} from 'react-icons/fa';

function SearchForm() {
 return (
  <div className='search-form'>
    <div className='container'>
      <div className='search-form-content'>
        <form className='search-form'>
          <div className='search-form-elem flex flex-sb'>
            <input type = "text" className='form-control' placeholder='Search for a title' />
            <button type = "submit" className='search-button flex flex-c'>
              <FaSearch size = {30} />
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}

export default SearchForm;