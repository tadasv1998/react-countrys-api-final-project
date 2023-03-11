import { useState, useEffect, useRef } from 'react';
import Header from './Header'
import './App.css';
import SearchIcon from '@mui/icons-material/Search';
import Country from './Country'
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './CountryDetails';

function App() {
const [darkMode, setDarkMode] = useState(false)
const [countries, setCountries] = useState([])
const countriesInputRef = useRef([])
const regionRef = useRef();

const switchMode = () => {
  setDarkMode((prevState) => !prevState);
};

useEffect(() => {
  try {
    fetchData();
  } catch (error) {
    console.log(error)
  }
}, []);

const fetchData = async () => {
  const response = await fetch ('https://restcountries.com/v2/all')
  const data = await response.json();

  setCountries(data);
}

const searchCountries = () => {
  const searchValue = countriesInputRef.current.value;

  if (searchValue.trim()) {
    const fetchSearch = async () => {
      const response = await fetch(
        `https://restcountries.com/v2/name/${searchValue}`
        );
      const data = await response.json();

      setCountries(data);
    };

    try {
      fetchSearch();
    } catch (error) {
      console.log(error);
    }
  } else {
    fetchData();
  }
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
              <input type='text' placeholder='Search for a contry...' ref={countriesInputRef} onChange={searchCountries}/>
            </div>
            <div className={`select_region ${darkMode ? 'darkMode' : ''}`}>
              <select ref={regionRef}>
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
            {countries.map((country) => (
              <Country darkMode={darkMode}
              key={country.alpha3Code}
              code={country.alpha3Code}
              name={country.name}
              capital={country.capital}
              population={country.population}
              region={country.region}
              flag={country.flag}
              />
            ))}
          </div>
        </div>} />
        <Route path='country-details' element={<CountryDetails darkMode={darkMode}/>}/>
    </Routes>


  </div>
  )}

export default App;
