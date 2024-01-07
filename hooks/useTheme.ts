import { useContext } from "react"
import { ThemeContext } from "../config/ThemeContext"

export const useTheme = () => {
  return useContext(ThemeContext)
}
