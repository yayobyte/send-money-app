import { StyleSheet } from "react-native";
import { theme } from "../../config/ThemeContext";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
  },
  icon: {
    marginVertical: theme.spacing.sm / 2,
  }
})
