import { StyleSheet } from "react-native";
import { theme } from "../../config/ThemeContext";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginHorizontal: theme.spacing.xl,
    textAlign: 'center',
    color: theme.colors.lightText,
    fontSize: theme.fontSize.md,
    paddingVertical: theme.spacing.md,
  },
  currencyItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: theme.spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.highlight,
  },
  currencyText: {
    fontSize: theme.fontSize.regular,
    textAlign: 'center',
    marginHorizontal: theme.spacing.lg,
  },
})
