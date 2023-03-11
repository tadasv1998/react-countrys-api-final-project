import { useState } from 'react';
import Header from './Header'
import './App.css';
import SearchIcon from '@mui/icons-material/Search';
import Country from './Country'
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './CountryDetails';

function App() {
const [darkMode, setDarkMode] = useState(false)

const switchMode = () => {
  setDarkMode((prevState) => !prevState);
};

  return (
  <div className={`app ${darkMode ? 'darkMode' : ''}`}>
    <Header onClick={switchMode} darkMode={darkMode}/>

    <Routes>
      <Route path='/' element={
        <div className='app_body'>
          <div className='inputs'>
            <div className={`search_input ${darkMode ? 'darkMode' : ''}`}>
              <SearchIcon />
              <input type='text' placeholder='Search for a contry...' />
            </div>
            <div className={`select_region ${darkMode ? 'darkMode' : ''}`}>
              <select>
                <option>All</option>
                <option>Africa</option>
                <option>Americas</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
              </select>
            </div>
          </div>
          <div className='countries'>
            <Country darkMode={darkMode}/>
          </div>
        </div>} />
        <Route path='country-details' element={<CountryDetails darkMode={darkMode}/>}/>
    </Routes>


  </div>
  )}

export default App;
