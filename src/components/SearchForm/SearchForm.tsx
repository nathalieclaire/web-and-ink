import React, { useEffect, ChangeEvent, FormEvent } from 'react';
import './SearchForm.css';
import {FaSearch} from 'react-icons/fa';

interface SearchFormProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ searchQuery, setSearchQuery }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  };

return (
  <div className="search-from-container">
  <div className='search-form'>
    <div className='container'>
      <div className='search-form-content'>
        <form className='search-form' onSubmit={handleSubmit}>
          <div className='search-form-elem flex flex-sb'>
            <input 
              type = "text" 
              className='form-control' 
              placeholder='search for a title' 
              value={searchQuery} 
              onChange={handleInputChange}
            />
            <button type = "submit" className='search-button flex'>
              <FaSearch size = {30} />
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>
  );
}

export default SearchForm;