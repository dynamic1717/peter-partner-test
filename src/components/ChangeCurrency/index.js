import React from 'react'
import SingleCurrency from './SingleCurrency'
import { useGlobalContext } from '../../context'

const ChangeCurrency = () => {
  const { getCurrencyRate, currencies } = useGlobalContext()

  const handleClick = (valute) => {
    getCurrencyRate('https://www.cbr-xml-daily.ru/daily_json.js', valute)
  }

  return (
    <section className='change-currency'>
      <h3 className='change-currency__title'>Change currency</h3>
      <div className='change-currency__container'>
        {currencies.map((item, id) => {
          return (
            <SingleCurrency
              key={id}
              icon={item.sign}
              valute={item.name}
              id={id}
              handleClick={handleClick}
            />
          )
        })}
      </div>
    </section>
  )
}

export default ChangeCurrency
