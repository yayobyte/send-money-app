import React, { useState, useEffect } from "react"
import { Text, View, StyleSheet, LayoutAnimation, UIManager, Platform, Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { theme } from "../config/ThemeContext"
import { DotsSection } from "./DotsSection";

type ExchangeRateFeesProps = {
  value: number
  from: string
  to: string
};

// Enable LayoutAnimation on Android
if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

const NUM_OF_DOTS_OPEN = 11
const NUM_OF_DOTS_CLOSED = 8

export const ExchangeRateFees = ({ from, to, value }: ExchangeRateFeesProps) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)
  
  useEffect(() => {
    LayoutAnimation.easeInEaseOut()
  }, [isAccordionOpen])
  
  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen)
  };
  
  return (
    <View style={styles.separator}>
      <DotsSection numOfDots={isAccordionOpen ? NUM_OF_DOTS_OPEN : NUM_OF_DOTS_CLOSED} />
      <Pressable style={styles.container} onPress={toggleAccordion} >
        <View style={styles.exchangeRate}>
          <Text style={styles.rate}>
            <Text style={styles.bold}>{`1 `}</Text>
            <Text style={styles.from}>{from}</Text>
            <Text>{` = `}</Text>
            <Text>{`${to} `}</Text>
            <Text style={styles.bold}>{value}</Text>
          </Text>
          
          <View style={styles.selector} >
            <Text style={styles.dropdown}>Fees</Text>
            <Ionicons
              name={isAccordionOpen ? "chevron-up" : "chevron-down"}
              size={theme.spacing.lg}
              color={theme.colors.primary}
              style={styles.icon}
            />
          </View>
        </View>
        
        {isAccordionOpen && (
          <View style={styles.additionalContent}>
            <Text style={styles.fees}>+ <Text style={{ fontWeight: 'bold'}}>25</Text> AED</Text>
          </View>
        )}
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  separator: {
    flexDirection: 'row',
  },
  container: {
    flexDirection: "column",
    backgroundColor: theme.colors.highlight,
    marginVertical: theme.spacing.md,
    padding: theme.spacing.lg,
    borderRadius: theme.spacing.md,
    flex: 11,
  },
  exchangeRate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rate: {
    flexDirection: "row",
    color: theme.colors.lightText,
    fontSize: theme.fontSize.regular,
  },
  icon: {
    color: theme.colors.primary,
  },
  dropdown: {
    color: theme.colors.primary,
    fontWeight: "bold",
  },
  selector: {
    flexDirection: "row",
  },
  additionalContent: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: theme.spacing.sm,
  },
  bold: {
    fontWeight: "bold",
  },
  from: {
    fontSize: theme.fontSize.md,
  },
  fees: {
    color: theme.colors.lightText,
    fontSize: theme.fontSize.regular,
  },
})
