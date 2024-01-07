import {
  Text,
  View,
  TouchableOpacity,
} from "react-native"
import React from "react"
import { theme } from "../../config/ThemeContext"
import CountryFlag from "react-native-country-flag"
import { Ionicons } from "@expo/vector-icons"
import { DecimalFormattedInput } from "../ui/"
import { styles } from "./CurrencyValueInput.styles";

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
        <DecimalFormattedInput onChangeText={onChangeText} value={value} editable={editable} />
      </View>
    </View>
  )
}


