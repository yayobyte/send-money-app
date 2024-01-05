import { TextInput, StyleSheet, View } from "react-native";
import { theme } from "../../config/ThemeContext";
import React from "react";

type CurrencyInputProps = {
  value: string
  onChangeText: React.Dispatch<React.SetStateAction<string>>
}

export const CurrencyInput = ({ value, onChangeText }: CurrencyInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput onChangeText={onChangeText} value={value} style={styles.input} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  input: {
    fontSize: theme.fontSize.header,
    fontWeight: "500",
  }
})
