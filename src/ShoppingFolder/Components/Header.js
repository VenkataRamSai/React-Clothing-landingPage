import React from 'react'

const Header = () => {
  return (
    <div className='head'>
      <div className='left'>
        <div className='title'>
          <h2>Shopping Mall</h2>
        </div>
      </div>
      <div className='center'>
        <ul>
          <li>Woman</li>
          <li>Men</li>
          <li>Beauty</li>
          <li>Children</li>
        </ul>
      </div>
      <div className='srch'>
        <input type='text' placeholder='Search' className='search'></input>
      </div>
      <div className='right'>
        <div className='signin'>SignIn/SignUp</div>
        <div className='cart'>Cart</div>
      </div>
    </div>
  )
}

export default Header
