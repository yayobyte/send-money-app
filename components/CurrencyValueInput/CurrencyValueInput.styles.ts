import { StyleSheet } from "react-native";
import { theme } from "../../config/ThemeContext";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: theme.colors.highlight,
    borderRadius: theme.spacing.md,
    marginVertical: theme.spacing.md,
  },
  currencyBlock: {
    borderRadius: theme.spacing.md,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primary,
    width: theme.spacing.sm * 33,
    padding: theme.spacing.lg,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  currencyFlag: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing.md,
  },
  flag: {
    marginRight: theme.spacing.md,
  },
  currency: {
    color: theme.colors.background,
    fontSize: theme.fontSize.regular,
    marginRight: theme.spacing.md,
  },
  text: {
    color: theme.colors.background,
    fontSize: theme.fontSize.md,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
})
