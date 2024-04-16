import { StyleSheet } from "react-native";
import { theme } from "../../config/ThemeContext";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    justifyContent: 'space-between',
  },
  successBlock: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: theme.spacing.lg,
  },
  icon: {
    color: theme.colors.primary,
    paddingVertical: theme.spacing.lg,
  },
  infoHeader: {
    fontSize: theme.fontSize.regular,
    color: theme.colors.lightText,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoText: {
    fontSize: theme.fontSize.regular,
    color: theme.colors.lightText,
    textAlign: 'center',
  },
})
