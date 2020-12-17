import React from 'react'
import Header from '../components/Header'
import SingleCard from '../components/ChangeCard/'
import { useGlobalContext } from '../context'

const CardSelect = () => {
  const { cards, setSelectedCard } = useGlobalContext()

  const handleClick = (card_number) => {
    const newCard = cards.find((card) => card.card_number === card_number)
    setSelectedCard(newCard)
  }

  return (
    <>
      <Header title={'Мои карты'} />

      <div className='card-select'>
        {cards.map((card, id) => {
          return (
            <SingleCard key={id} {...card} id={id} handleClick={handleClick} />
          )
        })}
      </div>
    </>
  )
}

export default CardSelect
