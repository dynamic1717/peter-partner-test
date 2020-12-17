import React, { useState, useContext, useEffect, useCallback } from 'react'
import mastercard from './icons/mastercard.png'
import visa from './icons/visa.png'
import unionpay from './icons/unionpay.png'

const AppContext = React.createContext()

const currencies = [
  { name: 'GBP', sign: '£' },
  { name: 'EUR', sign: '€' },
  { name: 'RUB', sign: '₽' },
]
const paymentType = [
  { type: 'mastercard', icon: mastercard },
  { type: 'visa', icon: visa },
  { type: 'unionpay', icon: unionpay },
]

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [cards, setCards] = useState(null)
  const [selectedCard, setSelectedCard] = useState(null)
  const [currencyRate, setCurrencyRate] = useState(null)
  const [usdRate, setUsdRate] = useState(null)
  const [currentValuteSign, setCurrentValuteSign] = useState(null)

  const getCards = useCallback((API) => {
    fetch(API)
      .then((resp) => resp.json())
      .then((data) => {
        setCards(data.users)
        setIsLoading(false)
      })
  }, [])

  const getCurrencyRate = useCallback((API, VALUTE_NAME) => {
    fetch(API)
      .then((resp) => resp.json())
      .then((data) => {
        if (VALUTE_NAME === 'RUB') {
          setCurrencyRate(data.Valute.USD.Value)
          setCurrentValuteSign('₽')
        } else {
          setCurrencyRate(data.Valute[VALUTE_NAME].Value)
          setCurrentValuteSign(
            currencies.find((item) => item.name === VALUTE_NAME).sign
          )
        }
        setUsdRate(data.Valute.USD.Value)
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    getCards()
    getCurrencyRate()
  }, [getCards, getCurrencyRate])

  const calculateValute = (amount) => {
    const rub = parseInt(amount) * usdRate
    if (currencyRate === usdRate) {
      return rub.toFixed(2)
    } else {
      return (rub / currencyRate).toFixed(2)
    }
  }

  const spaceDigits = (number) => {
    return number.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
  }

  return (
    <AppContext.Provider
      value={{
        isLoading,
        cards,
        getCards,
        selectedCard,
        setSelectedCard,
        calculateValute,
        getCurrencyRate,
        currencyRate,
        usdRate,
        paymentType,
        currencies,
        currentValuteSign,
        spaceDigits,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
