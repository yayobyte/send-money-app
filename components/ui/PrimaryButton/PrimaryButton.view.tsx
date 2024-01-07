import { Text, TouchableOpacity } from "react-native"
import React from "react"
import { styles } from "./PrimaryButton.styles";

type PrimaryButtonProps = {
  onPressStartTransfer: () => void
}

export const PrimaryButton = ({ onPressStartTransfer }: PrimaryButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPressStartTransfer}>
      <Text style={styles.buttonText}>Start Transfer</Text>
    </TouchableOpacity>
  )
}

