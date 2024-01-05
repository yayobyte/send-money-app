import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../config/ThemeContext";

export const ProcessingTimeInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Processing Time - 1 Hour</Text>
      <Text style={styles.text}>* Normal working hours & public holidays apply</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    marginVertical: theme.spacing.lg,
  },
  header: {
    fontSize: theme.fontSize.regular,
  },
  text: {
  
  }
})
