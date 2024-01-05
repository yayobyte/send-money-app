import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import { CurrencyExchangeBlock } from "../components/CurrencyExchangeBlock";
import { ProcessingTimeInfo } from "../components/ProcessingTimeInfo";
import { PrimaryButton } from "../components/PrimaryButton";
import { StatusBar } from "expo-status-bar";

export const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const onPressStartTransfer = () => {
  
  }
  return (
    <View style={[{ paddingTop: insets.top }, styles.container]}>
      <CurrencyExchangeBlock />
      <ProcessingTimeInfo />
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
    padding: 16,
  },
});
