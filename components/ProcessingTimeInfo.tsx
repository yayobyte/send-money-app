import { View, Text, StyleSheet } from "react-native";

export const ProcessingTimeInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Processing Time - 1 Hour</Text>
      <Text style={styles.container}>* Normal working hours & public holidays apply</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
  
  },
  header: {
    fontSize: 14,
  },
  text: {
  
  }
})
