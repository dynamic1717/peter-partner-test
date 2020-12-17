import React from 'react'
import { useGlobalContext } from '../../context'
import PropTypes from 'prop-types'

const HistoryItem = ({ title, icon_url, date, amount }) => {
  const { currentValuteSign, calculateValute, spaceDigits } = useGlobalContext()

  return (
    <article className='history__item'>
      <div className='history__purchase'>
        <div className='history__icon-container'>
          <img src={icon_url} alt='icon' />
        </div>
        <div className='history__purchase__descr'>
          <h5 className='history__purchase__title'>{title}</h5>
          <p className='history__purchase__date'>{date}</p>
        </div>
      </div>
      <div className='history__amount'>
        <div className='history__amount__calculated'>
          <span>- {currentValuteSign} </span>
          {spaceDigits(calculateValute(amount)).replace(`-`, '')}
        </div>
        <p className='history__amount__raw'>
          $ {spaceDigits(amount).replace(`-`, '')}
        </p>
      </div>
    </article>
  )
}

HistoryItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon_url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
}

export default HistoryItem
