import React from 'react'
import { useGlobalContext } from '../../context'
import PropTypes from 'prop-types'

let selectedItem = 0

const SingleCard = ({ card_number, type, handleClick, id }) => {
  const { paymentType } = useGlobalContext()

  const type_icon = paymentType.find((item) => item.type === type)

  return (
    <button
      className={
        id === selectedItem
          ? 'card-select__card card-select__card_active'
          : 'card-select__card'
      }
      onClick={() => {
        handleClick(card_number)
        selectedItem = id
      }}
    >
      {type_icon && <img src={type_icon.icon} alt={type} />}
      <p>{card_number}</p>
    </button>
  )
}

SingleCard.propTypes = {
  card_number: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
}

export default SingleCard
