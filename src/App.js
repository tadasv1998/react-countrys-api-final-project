import Header from './Header'
import './App.css';

function App() {
  return <div className='app'>
    <Header />
    <div className='app_body'>
      <div className='inputs'>
        <div className='search_input'>
          <input type='text' placeholder='Search for a contry...' />
        </div>
        <div className='select_region'>
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
    </div>
  </div>
}

export default App;
