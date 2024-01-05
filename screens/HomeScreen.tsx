import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import { CurrencyExchangeBlock, ProcessingTimeInfo } from "../components";
import { PrimaryButton } from "../components/ui";
import { StatusBar } from "expo-status-bar";
import { theme } from "../config/ThemeContext";

export const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const onPressStartTransfer = () => {
  
  }
  return (
    <View style={[{ paddingTop: insets.top }, styles.container]}>
      <View>
        <CurrencyExchangeBlock />
        <ProcessingTimeInfo />
      </View>
      <PrimaryButton onPressStartTransfer={onPressStartTransfer}/>
      <StatusBar style="auto"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.lg,
  },
});
