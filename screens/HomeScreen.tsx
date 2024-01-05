import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import { CurrencyExchangeBlock, ProcessingTimeInfo } from "../components";
import { PrimaryButton } from "../components/ui";
import { StatusBar } from "expo-status-bar";
import { theme } from "../config/ThemeContext";
import { useQuery } from "react-query";
import ApiService from "../api/ApiService";
import { Loader } from "../components/ui/Loader";
import React from "react";

export const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  
  const { isLoading } = useQuery('rates', async () => await ApiService.rates())
  
  const onPressStartTransfer = () => {
  
  }
  
  return (
    <View style={[{ paddingTop: insets.top }, styles.container]}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
        <View>
          <CurrencyExchangeBlock />
          <ProcessingTimeInfo />
        </View>
        <PrimaryButton onPressStartTransfer={onPressStartTransfer}/>
        <StatusBar style="auto"/>
        </>
      )}
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
