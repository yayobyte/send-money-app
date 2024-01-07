import { KeyboardAvoidingView, Platform, Text, View } from "react-native"
import { CurrencyExchangeBlockView, ProcessingTimeInfo } from "../../components"
import { PrimaryButton } from "../../components/ui"
import { StatusBar } from "expo-status-bar"
import { theme } from "../../config/ThemeContext"
import React from "react"
import RBSheet from "react-native-raw-bottom-sheet"
import { FontAwesome5 } from '@expo/vector-icons'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "./HomeScreen.styles";
import { useHomeScreenContainer } from "./HomeScreen.container";

const MODAL_SIZE = 230

export const HomeScreenView = () => {
  const {
    insets,
    refRBSheet,
    onPressStartTransfer,
  } = useHomeScreenContainer()
  
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
          <CurrencyExchangeBlockView/>
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


