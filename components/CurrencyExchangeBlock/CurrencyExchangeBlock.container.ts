import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import ApiService from "../../api/ApiService";
import {
  extractCurrenciesAndCountriesFromExPair,
  getRateAmountFromValueAndExRate
} from "./CurrencyExchangeBlock.helper";

const INITIAL_CURRENCY_EXCHANGE_PAIR = 'AEDUSD'
const INITIAL_AMOUNT_TO_SEND = '350'

export const useCurrencyExchangeBlockContainer = () => {
  const refRBSheet = useRef()
  
  const { isLoading, data } = useQuery('rates', async () => await ApiService.rates())
  
  const [valueFrom, setValueFrom] = useState(INITIAL_AMOUNT_TO_SEND)
  const [valueTo, setValueTo] = useState('0')
  const [exchangeRatePair, setExchangeRatePair] = useState(INITIAL_CURRENCY_EXCHANGE_PAIR)
  const [exchangeRateValue, setExchangeRateValue] = useState(0)
  
  const { currencyTo, countryTo, currencyFrom, countryFrom } = extractCurrenciesAndCountriesFromExPair(exchangeRatePair)
  
  useEffect(() => {
    const newRateAmount = getRateAmountFromValueAndExRate(valueFrom, exchangeRateValue)
    const newExchangeRateValue = data?.quotes[INITIAL_CURRENCY_EXCHANGE_PAIR] ?? 0
    setExchangeRateValue(newExchangeRateValue)
    setValueTo(newRateAmount)
  }, [valueFrom, exchangeRatePair, exchangeRateValue, data])
  
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
