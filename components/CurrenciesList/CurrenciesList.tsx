import React, { useState } from "react"
import { ScrollView, Text, TouchableHighlight, View } from "react-native"
import { theme } from "../../config/ThemeContext"
import { styles } from "./CurrenciesList.styles";
import { CurrenciesListContainer, useCurrenciesListContainer } from "./CurrenciesList.container";

type CurrenciesListProps = CurrenciesListContainer

export const CurrenciesList = ({ onSelect, data }: CurrenciesListProps) => {
  const {
    selectedCurrency,
    handleCurrencySelect,
    currencies
  } = useCurrenciesListContainer({ data, onSelect })
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Currency</Text>
      <ScrollView>
        {currencies.map((currency, index) => (
          <TouchableHighlight
            key={`${currency}_${index}`}
            onPress={() => handleCurrencySelect(currency)}
            underlayColor="#DDDDDD"
          >
            <View
              style={[
                styles.currencyItem,
                { backgroundColor: selectedCurrency === currency ? theme.colors.highlight : theme.colors.background },
              ]}
            >
              <Text style={styles.currencyText}>{currency.slice(3,6)}</Text>
            </View>
          </TouchableHighlight>
        ))}
      </ScrollView>
    </View>
  )
}

