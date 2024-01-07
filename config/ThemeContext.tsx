import React, { createContext } from 'react'

const spacingUnit = 8

export const theme = {
  spacing: {
    sm: spacingUnit / 2,
    md: spacingUnit,
    lg: spacingUnit * 2,
    xl: spacingUnit * 3,
    xxl: spacingUnit * 4
  },
  fontSize: {
    sm: spacingUnit,
    md: spacingUnit * 1.5,
    regular: spacingUnit * 2,
    lg: spacingUnit * 3,
    xl: spacingUnit * 3.5,
    header: spacingUnit * 4,
  },
  colors: {
    background: '#fff',
    primary: '#6653ff',
    secondary: '#697592',
    lightText: '#586585',
    blueLight: '#87a5c0',
    highlight: '#ecf2f5',
  }
}

export const ThemeContext = createContext({theme})

export const ThemeProvider = ({ children }: { children : React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  )
}
