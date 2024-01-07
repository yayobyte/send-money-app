import { StyleSheet } from "react-native";
import { theme } from "../../../config/ThemeContext";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.md,
  },
  hiddenInput: {
    position: 'absolute',
    left: -1, // Take the container out of the app (Hacky)
    top: -1,
    width: 1,
    height: 1,
    overflow: 'hidden'
  },
  formattedInput: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: theme.spacing.md,
    overflow: "hidden",
    flexWrap: 'nowrap',
  },
  touchable: {},
  integerPart: {
    fontSize: theme.fontSize.xl,
    fontWeight: '600',
  },
  decimalSeparator: {
    fontSize: theme.fontSize.xl,
    fontWeight: '600',
    marginHorizontal: 2,
  },
  decimalPart: {
    fontSize: theme.fontSize.xl,
    fontWeight: '600',
    color: theme.colors.lightText,
  },
})
