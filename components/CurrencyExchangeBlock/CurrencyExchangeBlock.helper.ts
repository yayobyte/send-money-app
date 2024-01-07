const DEFAULT_EXCHANGE_PAIR = 'AEDUSD'

export const extractCurrenciesAndCountriesFromExPair = (exchangeRatePair: string) => {
  const validatedExchangeRatePair = exchangeRatePair.length === 6 ? exchangeRatePair : DEFAULT_EXCHANGE_PAIR
  const currencyFrom = validatedExchangeRatePair.slice(0, 3)
  const countryFrom = validatedExchangeRatePair.slice(0, 2)
  const currencyTo = validatedExchangeRatePair.slice(3, 6)
  const countryTo = validatedExchangeRatePair.slice(3, 5)
  return { currencyFrom, currencyTo, countryFrom, countryTo }
}

export const getRateAmountFromValueAndExRate = (valueFrom: string, exchangeRateValue: number) => {
  const parsedValue = parseFloat(valueFrom)
  
  if (isNaN(parsedValue)) {
    return '0'
  }
  
  return (parsedValue * exchangeRateValue).toFixed(2).toString() || '0'
}
