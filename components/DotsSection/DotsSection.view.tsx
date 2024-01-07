import React from 'react'
import { View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { useTheme } from "../../hooks/useTheme"
import { styles } from "./DotsSection.styles";

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
