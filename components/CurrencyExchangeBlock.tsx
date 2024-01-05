import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import React from "react";
import { CurrencyValueInput } from "./CurrencyValueInput";
import { theme } from "../config/ThemeContext";

export const CurrencyExchangeBlock = () => {
  const [valueFrom, setValueFrom] = useState('2500')
  const [valueTo, setValueTo] = useState('35606')
  return (
    <View style={styles.container}>
      <CurrencyValueInput onChangeText={setValueFrom} value={valueFrom} text={'You send exactly'} currency={'AED'} countryIso={'AE'} />
      <View><Text>1AED = PHP 14.24</Text></View>
      <CurrencyValueInput onChangeText={setValueTo} value={valueTo} text={'Recipient gets'} currency={'COP'} countryIso={'CO'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.spacing.xxl,
  }
})
