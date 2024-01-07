import { StyleSheet } from "react-native";
import { theme } from "../../config/ThemeContext";

export const styles = StyleSheet.create({
  container: {
    marginVertical: theme.spacing.lg,
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    marginVertical: theme.spacing.md,
  },
  header: {
    fontSize: theme.fontSize.regular,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: theme.spacing.md,
  },
  text: {
    color: theme.colors.lightText,
    fontWeight: "600",
    fontSize: theme.fontSize.md,
  }
})
