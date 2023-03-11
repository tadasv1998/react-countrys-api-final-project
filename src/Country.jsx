import React from 'react'

function Country() {
  return (
    <div className='country'>
        <div className='flag_container'>
            <img src="" alt="" />
        </div>
        <div className='details'>
            <h3 className='name'>Name</h3>
            <p>
                Population: <span className='values'>Test</span>
            </p>
            <p>
                Region: <span className='values'>Test</span>
            </p>
            <p>
                Capital: <span className='values'>Test</span>
            </p>
        </div>
    </div>
  )
}

export default Country