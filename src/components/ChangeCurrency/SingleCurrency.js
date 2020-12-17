import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

let clickedItem = 0

const SingleCurrency = ({ valute, icon, handleClick, id }) => {
  useEffect(() => {
    clickedItem = 0
  }, [])

  return (
    <button
      className={
        id === clickedItem
          ? 'change-currency__btn change-currency__btn_active'
          : 'change-currency__btn'
      }
      onClick={() => {
        handleClick(valute)
        clickedItem = id
      }}
    >
      <p className='change-currency__text'>
        {icon}
        <span>{valute}</span>
      </p>
    </button>
  )
}

SingleCurrency.propTypes = {
  valute: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
}

export default SingleCurrency
