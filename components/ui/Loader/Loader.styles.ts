import { StyleSheet } from "react-native";
import { theme } from "../../../config/ThemeContext";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  indicatorWrapper: {
    flex: 1,
    marginVertical: theme.spacing.xxl,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
