import React from "react"
import { View, Text } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons'
import { theme } from "../../config/ThemeContext"
import { styles } from "./ProcessingTimeInfo.styles";

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
