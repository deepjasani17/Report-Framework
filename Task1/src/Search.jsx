import { useState } from 'react';
import './App.css';
import { mockData } from './FetchData';

function Search({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);

    const lowercasedQuery = value.toLowerCase();
    const filtered = mockData.filter(item =>
      Object.values(item).some(val =>
        String(val).toLowerCase().includes(lowercasedQuery)
      )
    );

    onSearch(filtered);
  };

  return (
    <div>
      Search: 
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search..."
      />
    </div>
  );
}

export default Search;
