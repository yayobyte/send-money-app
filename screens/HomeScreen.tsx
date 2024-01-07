import { useSafeAreaInsets } from "react-native-safe-area-context"
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from "react-native"
import { CurrencyExchangeBlock, ProcessingTimeInfo } from "../components"
import { PrimaryButton } from "../components/ui"
import { StatusBar } from "expo-status-bar"
import { theme } from "../config/ThemeContext"
import React, { useRef } from "react"
import RBSheet from "react-native-raw-bottom-sheet"
import { FontAwesome5 } from '@expo/vector-icons'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const MODAL_SIZE = 230

export const HomeScreen = () => {
  const insets = useSafeAreaInsets()
  const refRBSheet = useRef()
  
  const onPressStartTransfer = () => {
    showModal()
  }
  
  const showModal = () => {
    refRBSheet?.current.open()
  }
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <KeyboardAwareScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <CurrencyExchangeBlock/>
          <ProcessingTimeInfo/>
        </KeyboardAwareScrollView>
        <PrimaryButton onPressStartTransfer={onPressStartTransfer}/>
        <StatusBar style="auto"/>
      </View>
      <RBSheet
        ref={refRBSheet}
        animationType={'fade'}
        closeOnDragDown={true}
        closeOnPressMask={true}
        dragFromTopOnly={true}
        height={MODAL_SIZE}
      >
        <View style={styles.successBlock}>
          <FontAwesome5 name="check-circle" size={theme.spacing.xl * 2} style={styles.icon}/>
          <Text style={styles.infoHeader}>Transaction Successful!</Text>
          <Text style={styles.infoText}>Your money has been sent.</Text>
        </View>
      </RBSheet>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: theme.spacing.xl,
    paddingBottom: theme.spacing.md,
    justifyContent: 'space-between',
  },
  successBlock: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: theme.spacing.lg,
  },
  icon: {
    color: theme.colors.primary,
    paddingVertical: theme.spacing.lg,
  },
  infoHeader: {
    fontSize: theme.fontSize.regular,
    color: theme.colors.lightText,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoText: {
    fontSize: theme.fontSize.regular,
    color: theme.colors.lightText,
    textAlign: 'center',
  },
})
