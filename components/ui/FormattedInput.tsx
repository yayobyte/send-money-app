import React, { useState, useRef, useEffect } from 'react';
import { TextInput, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from "../../config/ThemeContext";
import { REGEXP_ONLY_TWO_DECIMALS, validateTwoDecimalNumber } from "../../utils/numbers";

type FormattedInputProps = {
  value: string
  onChangeText: (value: string) => void
  editable: boolean
}

const FormattedInput = ({ value, onChangeText, editable }: FormattedInputProps) => {
  const textInputRef = useRef(null);
  const [integerPart, setIntegerPart] = useState('0')
  const [decimalPart, setDecimalPart] = useState('00')
  
  const reset = () => {
    editable && onChangeText('0')
    setIntegerPart('0')
    setDecimalPart('00')
  }
  
  const updateTextFields = (sanitizedValue: string) => {
    const formattedValue = parseFloat(sanitizedValue).toFixed(2)
    
    setIntegerPart(formattedValue.split('.')[0])
    setDecimalPart(formattedValue.split('.')[1])
    
    onChangeText(sanitizedValue)
  }
  
  const onHandleChangeValue = (value: string) => {
    const sanitizedValue = validateTwoDecimalNumber(value)
    if (sanitizedValue === '') {
      reset()
      return
    }
    
    // Allow only two decimals
    const match = sanitizedValue.match(REGEXP_ONLY_TWO_DECIMALS)
    if (!match) {
      return ;
    }
    
    updateTextFields(sanitizedValue)
  }
  
  const openKeyboard = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
      editable && reset()
    }
  }
  
  useEffect(() => {
    updateTextFields(value)
  }, [value]);
  
  return (
    <TouchableOpacity style={styles.container} onPress={openKeyboard} disabled={!editable}>
      {editable && <TextInput
        ref={textInputRef}
        style={styles.hiddenInput}
        keyboardType="decimal-pad"
        value={value}
        onChangeText={onHandleChangeValue}
        onBlur={() => onHandleChangeValue(parseFloat(value).toString())}
      />}
      <View style={styles.touchable}>
        <View style={styles.formattedInput}>
          <Text style={[styles.integerPart]} numberOfLines={1}>{parseInt(integerPart).toLocaleString()}</Text>
          <Text style={[styles.decimalSeparator]} numberOfLines={1}>{'.'}</Text>
          <Text style={[styles.decimalPart]} numberOfLines={1}>{decimalPart}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.md,
  },
  hiddenInput: {
    position: 'absolute',
    left: -1, // Take the container out of the app (Hacky)
    top: -1,
    width: 1,
    height: 1,
    overflow: 'hidden'
  },
  formattedInput: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: theme.spacing.md,
    overflow: "hidden",
    flexWrap: 'nowrap',
  },
  touchable: {},
  integerPart: {
    fontSize: theme.fontSize.xl,
    fontWeight: '600',
  },
  decimalSeparator: {
    fontSize: theme.fontSize.xl,
    fontWeight: '600',
    marginHorizontal: 2,
  },
  decimalPart: {
    fontSize: theme.fontSize.xl,
    fontWeight: '600',
    color: theme.colors.lightText,
  },
});

export default FormattedInput;
