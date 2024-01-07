import React, { useState } from "react"
import { ScrollView, Text, TouchableHighlight, View, StyleSheet } from "react-native"
import { theme } from "../config/ThemeContext"
import { RatesResult } from "../api/types/rates"

type CurrencyPairListProps = {
  onSelect: (currency: string, value: number) => void
  data: RatesResult["quotes"]
}

export const CurrencyPairList = ({ onSelect, data }: CurrencyPairListProps) => {
  const [selectedCurrency, setSelectedCurrency] = useState('')
  
  const handleCurrencySelect = (currency: string) => {
    setSelectedCurrency(currency)
    onSelect(currency, data[currency] ?? 0)
  }
  
  const currencies = Object.keys(data ?? {})
  
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginHorizontal: theme.spacing.xl,
    textAlign: 'center',
    color: theme.colors.lightText,
    fontSize: theme.fontSize.md,
    paddingVertical: theme.spacing.md,
  },
  currencyItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: theme.spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.highlight,
  },
  currencyText: {
    fontSize: theme.fontSize.regular,
    textAlign: 'center',
    marginHorizontal: theme.spacing.lg,
  },
})
