import { StyleSheet } from "react-native";
import { theme } from "../../config/ThemeContext";

export const styles = StyleSheet.create({
  separator: {
    flexDirection: 'row',
  },
  container: {
    flexDirection: "column",
    backgroundColor: theme.colors.highlight,
    marginVertical: theme.spacing.md,
    padding: theme.spacing.lg,
    borderRadius: theme.spacing.md,
    flex: 11,
  },
  exchangeRate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rate: {
    flexDirection: "row",
    color: theme.colors.lightText,
    fontSize: theme.fontSize.regular,
  },
  icon: {
    color: theme.colors.primary,
  },
  dropdown: {
    color: theme.colors.primary,
    fontWeight: "bold",
  },
  selector: {
    flexDirection: "row",
  },
  additionalContent: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: theme.spacing.sm,
  },
  bold: {
    fontWeight: "bold",
  },
  from: {
    fontSize: theme.fontSize.md,
  },
  fees: {
    color: theme.colors.lightText,
    fontSize: theme.fontSize.regular,
  },
})
