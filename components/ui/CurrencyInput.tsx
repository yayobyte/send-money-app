import { TextInput, StyleSheet, View } from "react-native";
import { theme } from "../../config/ThemeContext";
import React from "react";

type CurrencyInputProps = {
  value: string
  onChangeText: React.Dispatch<React.SetStateAction<string>>
}

export const CurrencyInput = ({ value, onChangeText }: CurrencyInputProps) => {
  const onHandleChange = (value: string) => {
    const sanitizedValue = value.replace(/^0+/, '');
    if (sanitizedValue === '' || (sanitizedValue.length === 1 && sanitizedValue[0] === '0')) {
      onChangeText('0');
      return;
    }
    
    const numericValue = parseFloat(sanitizedValue);
    if (isNaN(numericValue)) {
      return;
    }
    
    if (numericValue < 0) {
      return;
    }
    
    onChangeText(sanitizedValue);
    
  }
  return (
    <View style={styles.container}>
      <TextInput onChangeText={onHandleChange} value={value} style={styles.input} />
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
