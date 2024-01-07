import { useEffect, useState } from "react";
import { LayoutAnimation } from "react-native";

export const useExchangeRatesFeesContainer = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)
  
  useEffect(() => {
    LayoutAnimation.easeInEaseOut()
  }, [isAccordionOpen])
  
  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen)
  }
  
  return {
    isAccordionOpen,
    toggleAccordion
  }
}
