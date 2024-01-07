import { useEffect, useRef, useState } from "react";
import { REGEXP_ONLY_TWO_DECIMALS, validateTwoDecimalNumber } from "../../../utils/numbers";

export type DecimalFormattedInputContainerProps = {
  value: string
  onChangeText: (value: string) => void
  editable: boolean
}

export const useDecimalFormattedInputContainer = ({ value, editable, onChangeText}: DecimalFormattedInputContainerProps) => {
  const textInputRef = useRef(null)
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
      return
    }
    
    updateTextFields(sanitizedValue)
  }
  
  const openKeyboard = () => {
    if (textInputRef.current) {
      textInputRef.current.focus()
      editable && reset()
    }
  }
  
  useEffect(() => {
    updateTextFields(value)
  }, [value])
  
  return {
    textInputRef,
    integerPart,
    decimalPart,
    onHandleChangeValue,
    openKeyboard,
  }
}
