import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { theme } from '../../config/ThemeContext';
import React from "react";

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

const styles = StyleSheet.create({
  button: {
    alignContent: 'stretch',
    paddingHorizontal: theme.spacing.xxl * 3,
    paddingVertical: theme.spacing.xl,
    marginHorizontal: theme.spacing.lg,
    marginVertical: theme.spacing.md,
    borderRadius: theme.spacing.xl,
    backgroundColor: theme.colors.primary,
  },
  buttonText: {
    textAlign: 'center',
    color: theme.colors.background,
    fontSize: theme.fontSize.regular,
    fontWeight: 'bold',
  }
})
