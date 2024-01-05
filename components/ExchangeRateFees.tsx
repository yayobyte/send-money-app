import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import React from "react";
import { theme } from "../config/ThemeContext";

type ExchangeRateFeesProps = {
  value: number
  from: string
  to: string
}

export const ExchangeRateFees = ({ from, to, value }: ExchangeRateFeesProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.rate}>
        <Text style={styles.bold}>{`1 `}</Text>
        <Text style={styles.from}>{from}</Text>
        <Text>{' = '}</Text>
        <Text>{`${to} `}</Text>
        <Text style={styles.bold}>{value}</Text>
      </Text>
      <TouchableOpacity style={styles.selector}>
        <Text style={styles.dropdown}>Fees</Text>
        <Ionicons name="chevron-down" size={theme.spacing.lg} color={theme.colors.primary} style={styles.icon}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.highlight,
    marginVertical: theme.spacing.md,
    padding: theme.spacing.lg,
    borderRadius: theme.spacing.md,
  },
  rate: {
    flexDirection: 'row',
    color: theme.colors.lightText,
    fontSize: theme.fontSize.regular,
  },
  icon: {
    color: theme.colors.primary,
  },
  dropdown: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  selector: {
    flexDirection: 'row',
  },
  bold: {
    fontWeight: 'bold',
  },
  from: {
    fontSize: theme.fontSize.md,
  },
})
