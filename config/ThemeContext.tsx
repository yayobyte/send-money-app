import { createContext } from 'react';

export const ThemeContext = createContext({});

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
    regular: spacingUnit * 2,
    header: spacingUnit * 4,
  },
  colors: {
    background: '#fff',
    primary: '#6653ff',
    secondary: '#697592',
    highlight: '#ecf2f5',
    lightText: '#838383',
  }
}

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
