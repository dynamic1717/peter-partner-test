import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../icons/back-arrow.png'
import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <header className='header'>
      <h1 className='header-title'>{title}</h1>
      {title !== 'Главная' && (
        <Link to='/' className='header__arrow'>
          <img src={arrow} alt='back' />
        </Link>
      )}
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
