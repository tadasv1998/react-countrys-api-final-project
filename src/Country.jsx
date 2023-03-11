import React from 'react'

function Country({ darkMode, name, capital, population, region, flag }) {
    return (
        <div className={`country ${darkMode ? 'darkMode' : ''}`}>
            <div className='flag_container'>
                <img src={flag} alt="" />
            </div>
            <div className={`details ${darkMode ? 'darkMode' : ''}`}>
                <h3 className='name'>{name}</h3>
                <p>
                    Population: <span className={`values ${darkMode ? 'darkMode' : ''}`}>
                        {population}
                    </span>
                </p>
                <p>
                    Region: <span className={`values ${darkMode ? 'darkMode' : ''}`}>
                        {region}
                    </span>
                </p>
                <p>
                    Capital: <span className={`values ${darkMode ? 'darkMode' : ''}`}>
                        {capital}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Country