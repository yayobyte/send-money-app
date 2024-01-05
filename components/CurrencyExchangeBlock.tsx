import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import { CurrencyValueInput } from "./CurrencyValueInput";
import { theme } from "../config/ThemeContext";
import { ExchangeRateFees } from "./ExchangeRateFees";

export const CurrencyExchangeBlock = () => {
  const [valueFrom, setValueFrom] = useState('2500')
  const [valueTo, setValueTo] = useState('35606')
  const [exchangeRatePair, setExchangeRatePair] = useState('AEDCOP')
  const [exchangeRateValue, setExchangeRateValue] = useState(1069.811372)
  
  const currencyFrom = exchangeRatePair.slice(0, 3)
  const countryFrom = exchangeRatePair.slice(0, 2)
  const currencyTo = exchangeRatePair.slice(3, 6)
  const countryTo = exchangeRatePair.slice(3, 5)
  
  const onChangeCurrency = (currency: string, value: number) => {
    setExchangeRatePair(currency)
    setExchangeRateValue(value)
  }
  
  useEffect(() => {
    const newRateAmount = (parseFloat(valueFrom) * exchangeRateValue).toFixed(2).toString() || '0'
    setValueTo(newRateAmount)
  }, [valueFrom, exchangeRatePair, exchangeRateValue]);
  
  return (
    <View style={styles.container}>
      <CurrencyValueInput
        onChangeText={setValueFrom}
        value={valueFrom}
        text={'You send exactly'}
        currency={currencyFrom}
        countryIso={countryFrom}
        touchable={false}
      />
      <ExchangeRateFees value={parseFloat(exchangeRateValue.toFixed(2))} from={currencyFrom} to={currencyTo}/>
      <CurrencyValueInput
        onChangeText={setValueTo}
        onChangeCurrency={onChangeCurrency}
        value={valueTo}
        text={'Recipient gets'}
        currency={currencyTo}
        countryIso={countryTo}
        touchable={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.spacing.xxl,
  }
})
