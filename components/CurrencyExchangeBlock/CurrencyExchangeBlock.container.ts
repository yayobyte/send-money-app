import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import ApiService from "../../api/ApiService";

export const useCurrencyExchangeBlockContainer = () => {
  const refRBSheet = useRef()
  
  const { isLoading, data } = useQuery('rates', async () => await ApiService.rates())
  
  const [valueFrom, setValueFrom] = useState('2500')
  const [valueTo, setValueTo] = useState('35606')
  const [exchangeRatePair, setExchangeRatePair] = useState('AEDCOP')
  const [exchangeRateValue, setExchangeRateValue] = useState(1069.811372)
  
  const currencyFrom = exchangeRatePair.slice(0, 3)
  const countryFrom = exchangeRatePair.slice(0, 2)
  const currencyTo = exchangeRatePair.slice(3, 6)
  const countryTo = exchangeRatePair.slice(3, 5)
  
  useEffect(() => {
    const newRateAmount = (parseFloat(valueFrom) * exchangeRateValue).toFixed(2).toString() || '0'
    setValueTo(newRateAmount)
  }, [valueFrom, exchangeRatePair, exchangeRateValue])
  
  const hideModal = () => {
    refRBSheet?.current?.close()
  }
  
  const showModal = () => {
    refRBSheet?.current.open()
  }
  
  const onSelect = (currency: string, value: number) => {
    setExchangeRatePair(currency)
    setExchangeRateValue(value)
    hideModal()
  }
  
  return {
    isLoading,
    setValueFrom,
    valueFrom,
    currencyFrom,
    countryFrom,
    exchangeRateValue,
    setValueTo,
    valueTo,
    currencyTo,
    countryTo,
    showModal,
    refRBSheet,
    onSelect,
    data,
  }
}
