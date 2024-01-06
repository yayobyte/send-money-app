import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { CurrencyExchangeBlock, ProcessingTimeInfo } from "../components";
import { PrimaryButton } from "../components/ui";
import { StatusBar } from "expo-status-bar";
import { theme } from "../config/ThemeContext";
import React from "react";

const DEFAULT_VERTICAL_OFFSET = Platform.OS === 'ios' ? 300 : 0 // px

export const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const onPressStartTransfer = () => {
  
  }
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={DEFAULT_VERTICAL_OFFSET}
      style={{ flex: 1 }}
    >
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <View>
        <CurrencyExchangeBlock/>
        <ProcessingTimeInfo/>
      </View>
      <PrimaryButton onPressStartTransfer={onPressStartTransfer}/>
      <StatusBar style="auto"/>
    </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: theme.spacing.xl,
    justifyContent: 'space-between',
  },
});
