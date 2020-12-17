import React, { useEffect } from 'react'
import ChangeCurrency from '../components/ChangeCurrency/'
import Header from '../components/Header'
import MainCard from '../components/MainCard/'
import History from '../components/History/'
import { useGlobalContext } from '../context'
import Skeleton from 'react-loading-skeleton'

function MainPage() {
  const {
    getCards,
    cards,
    selectedCard,
    setSelectedCard,
    getCurrencyRate,
    currencies,
    isLoading,
  } = useGlobalContext()

  useEffect(() => {
    getCards('https://hr.peterpartner.net/test/android/v1/users.json')
    getCurrencyRate(
      'https://www.cbr-xml-daily.ru/daily_json.js',
      currencies[0].name
    )
  }, [currencies, getCards, getCurrencyRate])

  useEffect(() => {
    if (cards && !selectedCard) {
      setSelectedCard(cards[0])
    }
  }, [cards, selectedCard, setSelectedCard])

  if (isLoading) {
    return (
      <>
        <Header title={'Загрузка...'} />
        <div className='container'>
          <Skeleton count={3} height={100} />
        </div>
      </>
    )
  }

  return (
    <>
      <Header title={'Главная'} />

      <div className='container'>
        {selectedCard && <MainCard {...selectedCard} />}

        <ChangeCurrency />

        {selectedCard && <History items={selectedCard.transaction_history} />}
      </div>
    </>
  )
}

export default MainPage
