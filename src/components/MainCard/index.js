import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'
import PropTypes from 'prop-types'
import cardholder_ico from '../../icons/cardholder.png'
import Skeleton from 'react-loading-skeleton'

const MainCard = ({ card_number, cardholder_name, valid, balance, type }) => {
  const {
    calculateValute,
    paymentType,
    currentValuteSign,
    spaceDigits,
  } = useGlobalContext()

  const type_icon = paymentType.find((item) => item.type === type)

  return (
    <Link to='/cards' className='main-card'>
      <h3 className='card-number'>
        {type_icon && <img src={type_icon.icon} alt={type} />}
        {card_number}
      </h3>
      <div className='card-info'>
        <p className='card-info__name'>
          <img src={cardholder_ico} alt='cardholder' />
          {cardholder_name}
        </p>
        <p className='card-info__valid'>
          VALID THRU<span>{valid}</span>
        </p>
      </div>
      <div className='card-balance'>
        {currentValuteSign ? (
          <p className='card-balance__calc'>
            {currentValuteSign}
            {spaceDigits(calculateValute(balance))}
          </p>
        ) : (
          <Skeleton height={25} width={150} />
        )}
        <p className='card-balance__your'>
          Your balance <span>${spaceDigits(balance)}</span>
        </p>
      </div>
    </Link>
  )
}

MainCard.propTypes = {
  card_number: PropTypes.string.isRequired,
  cardholder_name: PropTypes.string.isRequired,
  valid: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
}

export default MainCard
