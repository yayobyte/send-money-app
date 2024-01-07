import React from 'react'
import { TextInput, View, Text, TouchableOpacity } from 'react-native'
import {
  DecimalFormattedInputContainerProps,
  useDecimalFormattedInputContainer
} from "./DecimalFormattedInput.container";
import { styles } from "./DecimalFormattedInput.styles";

type DecimalFormattedInputProps = DecimalFormattedInputContainerProps

export const DecimalFormattedInput = ({ value, onChangeText, editable }: DecimalFormattedInputProps) => {
  const {
    textInputRef,
    integerPart,
    decimalPart,
    onHandleChangeValue,
    openKeyboard,
  } = useDecimalFormattedInputContainer({ value, onChangeText, editable })
  
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
  )
}
