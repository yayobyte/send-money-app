import { ActivityIndicator, View } from "react-native"
import React from "react"
import { theme } from "../../../config/ThemeContext"
import { styles } from "./Loader.styles";

export const Loader = () => {
  return (
    <View style={styles.indicatorWrapper}>
      <ActivityIndicator size="large" color={theme.colors.lightText}/>
    </View>
  )
}
