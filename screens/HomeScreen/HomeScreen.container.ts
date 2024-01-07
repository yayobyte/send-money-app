import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRef } from "react";

export const useHomeScreenContainer = () => {
  const insets = useSafeAreaInsets()
  const refRBSheet = useRef()
  
  const onPressStartTransfer = () => {
    showModal()
  }
  
  const showModal = () => {
    refRBSheet?.current.open()
  }
  
  return {
    insets,
    refRBSheet,
    onPressStartTransfer,
  }
}
