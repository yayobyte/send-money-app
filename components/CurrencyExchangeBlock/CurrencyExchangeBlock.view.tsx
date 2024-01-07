import { View, StyleSheet } from "react-native"
import React from "react"
import { Loader } from "../ui"
import RBSheet from "react-native-raw-bottom-sheet"
import { useCurrencyExchangeBlockContainer } from "./CurrencyExchangeBlock.container";
import { ExchangeRateFees } from "../ExchangeRatesFees/ExchangeRateFees.view";
import { CurrenciesList } from "../CurrenciesList/CurrenciesList";
import { styles } from "./CurrencyExchangeBlock.styles";
import { CurrencyValueInput } from "../CurrencyValueInput/CurrencyValueInput.view";

const MODAL_SIZE = 280

export const CurrencyExchangeBlockView = () => {
  const {
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
  } = useCurrencyExchangeBlockContainer()
  
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
            showModal={showModal}
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
        <CurrenciesList onSelect={onSelect} data={data?.quotes ?? {}}/>
      </RBSheet>
    </View>
  )
}

