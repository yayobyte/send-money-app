import { StyleSheet } from "react-native";
import { theme } from "../../../config/ThemeContext";

export const styles = StyleSheet.create({
  button: {
    alignContent: 'stretch',
    paddingHorizontal: theme.spacing.xxl,
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
