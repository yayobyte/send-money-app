import { Text, View, StyleSheet } from "react-native";
import { CurrencyInput } from "./ui";
import React from "react";
import { theme } from "../config/ThemeContext";
import CountryFlag from "react-native-country-flag";

type CurrencyAndValueSelectorProps = {
  value: string
  onChangeText: React.Dispatch<React.SetStateAction<string>>
  text: string
  currency: string
  countryIso: string
}

const FLAG_SIZE = 20

export const CurrencyValueInput = ({ value, onChangeText, text, currency, countryIso = '' }: CurrencyAndValueSelectorProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.currencyBlock}>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.currencyFlag}>
          <View style={styles.flag}>
            <CountryFlag isoCode={countryIso} size={FLAG_SIZE} />
          </View>
          <Text style={styles.currency}>{currency}</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <CurrencyInput onChangeText={onChangeText} value={value} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: theme.colors.highlight,
    borderRadius: theme.spacing.md,
  },
  currencyBlock: {
    borderRadius: theme.spacing.md,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primary,
    width: theme.spacing.lg * 8,
    paddingHorizontal: theme.spacing.md,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  currencyFlag: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing.md,
  },
  flag: {
    marginRight: theme.spacing.sm,
  },
  currency: {
    color: theme.colors.background,
    fontSize: theme.fontSize.regular,
  },
  text: {
    color: theme.colors.background,
    fontSize: theme.fontSize.md,
  },
  inputContainer: {
    flex: 1,
    padding: theme.spacing.lg,
  },
})
