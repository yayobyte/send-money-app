import { useContext } from "react";
import { ThemeContext } from "../config/ThemeContext";

// In case any theme item needs to be changed dynamically
export const useTheme = () => {
  return useContext(ThemeContext);
};
