import { View, StyleSheet } from "react-native";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { CurrencyValueInput } from "./CurrencyValueInput";
import { theme } from "../config/ThemeContext";
import { ExchangeRateFees } from "./ExchangeRateFees";
import { CurrencyPairList } from "./CurrencyPairList";
import RBSheet from "react-native-raw-bottom-sheet";
import { useQuery } from "react-query";
import ApiService from "../api/ApiService";
import { Loader } from "./ui";

const MODAL_SIZE = 280

export const CurrencyExchangeBlock = () => {
  const refRBSheet = useRef();
  
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
  }, [valueFrom, exchangeRatePair, exchangeRateValue]);
  
  const hideModal = () => {
    refRBSheet?.current?.close()
  };
  
  const onSelect = (currency: string, value: number) => {
    setExchangeRatePair(currency)
    setExchangeRateValue(value)
    hideModal()
  }
  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <View>
          <CurrencyValueInput
            onChangeText={setValueFrom}
            value={valueFrom}
            text={'You send exactly'}
            currency={currencyFrom}
            countryIso={countryFrom}
            touchable={false}
            editable={true}
          />
          <ExchangeRateFees value={parseFloat(exchangeRateValue.toFixed(2))} from={currencyFrom} to={currencyTo}/>
          <CurrencyValueInput
            onChangeText={setValueTo}
            value={valueTo}
            text={'Recipient gets'}
            currency={currencyTo}
            countryIso={countryTo}
            touchable={true}
            editable={false}
            refRBSheet={refRBSheet}
          />
        </View>
      )}
      
      <RBSheet
        ref={refRBSheet}
        animationType={'fade'}
        closeOnDragDown={true}
        closeOnPressMask={true}
        dragFromTopOnly={true}
        height={MODAL_SIZE}
      >
        <CurrencyPairList onSelect={onSelect} data={data?.quotes ?? {}}/>
      </RBSheet>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.spacing.xxl,
  }
})
