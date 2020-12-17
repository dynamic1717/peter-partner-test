import React from 'react'
import HistoryItem from './HistoryItem'
import PropTypes from 'prop-types'

const History = ({ items }) => {
  return (
    <section className='history'>
      <h3 className='history__title'>History</h3>
      <div className='history-container'>
        {items.map((item, index) => {
          return <HistoryItem key={index} {...item} />
        })}
      </div>
    </section>
  )
}

History.propTypes = {
  items: PropTypes.array.isRequired,
}

export default History
