import { useState } from "react"
import { RatesResult } from "../../api/types/rates";

export type CurrenciesListContainer = {
  onSelect: (currency: string, value: number) => void
  data: RatesResult["quotes"]
}

export const useCurrenciesListContainer = ({ onSelect, data }: CurrenciesListContainer) => {
  const [selectedCurrency, setSelectedCurrency] = useState('')
  
  const handleCurrencySelect = (currency: string) => {
    setSelectedCurrency(currency)
    onSelect(currency, data[currency] ?? 0)
  }
  
  const currencies = Object.keys(data ?? {})
  return {
    selectedCurrency,
    handleCurrencySelect,
    currencies
  }
}
