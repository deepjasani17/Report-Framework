import { useState } from 'react';
import './App.css';
import FetchData from './FetchData';
import Search from './Search';

function App() {
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (data) => {
    setFilteredData(data);
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      <FetchData data={filteredData} />
    </>
  );
}

export default App;
