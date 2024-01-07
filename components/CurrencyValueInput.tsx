import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { CurrencyInput } from "./ui";
import React, { useRef } from "react";
import { theme } from "../config/ThemeContext";
import CountryFlag from "react-native-country-flag";
import { Ionicons } from "@expo/vector-icons";
import RBSheet from 'react-native-raw-bottom-sheet'
import { CurrencyPairList } from "./CurrencyPairList";
import FormattedInput from "./ui/FormattedInput";

type CurrencyAndValueSelectorProps = {
  value: string
  onChangeText: React.Dispatch<React.SetStateAction<string>>
  text: string
  currency: string
  countryIso: string
  touchable: boolean
  refRBSheet?: React.Ref<any>
  showModal?: () => void
  editable: boolean
}

const FLAG_SIZE = 20

export const CurrencyValueInput = ({ value, onChangeText, text, currency, touchable, countryIso = '', editable, showModal }: CurrencyAndValueSelectorProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.currencyBlock} disabled={!touchable} onPress={showModal}>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.currencyFlag}>
          <View style={styles.flag}>
            <CountryFlag isoCode={countryIso} size={FLAG_SIZE} />
          </View>
          <Text style={styles.currency}>{currency}</Text>
          {touchable && <Ionicons name="chevron-down" size={theme.spacing.lg} color={theme.colors.background}/>}
        </View>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <FormattedInput onChangeText={onChangeText} value={value} editable={editable} />
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
    marginVertical: theme.spacing.md,
  },
  currencyBlock: {
    borderRadius: theme.spacing.md,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primary,
    width: theme.spacing.sm * 33,
    padding: theme.spacing.lg,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  currencyFlag: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing.md,
  },
  flag: {
    marginRight: theme.spacing.md,
  },
  currency: {
    color: theme.colors.background,
    fontSize: theme.fontSize.regular,
    marginRight: theme.spacing.md,
  },
  text: {
    color: theme.colors.background,
    fontSize: theme.fontSize.md,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
})
