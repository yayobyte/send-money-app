import { SafeAreaProvider } from 'react-native-safe-area-context'
import { HomeScreen } from "./screens/HomeScreen"
import { ThemeProvider } from "./config/ThemeContext"
import { QueryClient, QueryClientProvider } from 'react-query'
import React from 'react'

const queryClient = new QueryClient()

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <HomeScreen />
        </QueryClientProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

