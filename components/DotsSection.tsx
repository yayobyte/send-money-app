import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { useTheme } from "../hooks/useTheme"
import { theme } from "../config/ThemeContext"

type DotsSectionProps = {
  numOfDots: number
}

export const DotsSection = ({ numOfDots }: DotsSectionProps) => {
  const { theme } = useTheme()
  const dotsArray = Array.from({ length: numOfDots })
  
  return (
    <View style={styles.container}>
      {dotsArray.map((_, index) => (
        <FontAwesome key={index} name="circle" size={theme.fontSize.sm / 2} style={styles.icon} color={theme.colors.blueLight} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
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
