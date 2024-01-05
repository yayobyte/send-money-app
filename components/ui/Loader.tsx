import { ActivityIndicator, StyleSheet, View } from "react-native";
import React from "react";
import { theme } from "../../config/ThemeContext";

export const Loader = () => {
  return (
    <View style={styles.indicatorWrapper}>
      <ActivityIndicator size="large" color={theme.colors.primary} style={styles.indicator}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  indicatorWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {},
})
