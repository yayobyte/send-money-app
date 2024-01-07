import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons'
import { theme } from "../config/ThemeContext"

export const ProcessingTimeInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <FontAwesome5 name="bolt" size={theme.spacing.lg} color="black" style={styles.icon} />
        <Text style={styles.header}>Processing Time - 1 Hour</Text>
      </View>
      <Text style={styles.text}>* Normal working hours & public holidays apply</Text>
    </View>
  )
}

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
