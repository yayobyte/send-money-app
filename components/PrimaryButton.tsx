import { Text, TouchableOpacity, StyleSheet } from "react-native";

export const PrimaryButton = ({ onPressStartTransfer }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPressStartTransfer}>
      <Text style={styles.buttonText}>Start Transfer</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 8 * 12,
    paddingVertical: 8 * 3,
    borderRadius: 8 * 3,
    marginVertical: 8 * 2,
    marginHorizontal: 8 * 2,
    backgroundColor: '#2f80ed',
  },
  buttonText: {
    color: 'white',
    fontSize: 8 * 2,
    fontWeight: 'bold',
  }
})
