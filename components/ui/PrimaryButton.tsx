import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { theme } from '../../config/ThemeContext';

export const PrimaryButton = ({ onPressStartTransfer }) => {
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
    borderRadius: theme.spacing.xl,
    marginVertical: theme.spacing.md,
    backgroundColor: theme.colors.primary,
  },
  buttonText: {
    color: theme.colors.background,
    fontSize: theme.fontSize.regular,
    fontWeight: 'bold',
  }
})
