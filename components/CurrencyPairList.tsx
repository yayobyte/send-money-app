import React, { useState } from "react";
import { ScrollView, Text, TouchableHighlight, View, StyleSheet } from "react-native";
import { theme } from "../config/ThemeContext";
import CountryFlag from "react-native-country-flag";
import { RatesResult } from "../api/types/rates";

type CurrencyPairListProps = {
  onSelect: (currency: string, value: number) => void
  data: RatesResult["quotes"]
}

export const CurrencyPairList = ({ onSelect, data }: CurrencyPairListProps) => {
  const [selectedCurrency, setSelectedCurrency] = useState('');
  
  const handleCurrencySelect = (currency: string) => {
    setSelectedCurrency(currency);
    onSelect(currency, data[currency] ?? 0);
  };
  
  const currencies = Object.keys(data ?? {})
  
  return (
    <View style={styles.container}>
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
              <CountryFlag isoCode={currency.slice(3,5)} size={theme.spacing.lg} />
              <Text style={styles.currencyText}>{currency.slice(3,6)}</Text>
            </View>
          </TouchableHighlight>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
