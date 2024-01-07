import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from "./config/ThemeContext"
import { QueryClient, QueryClientProvider } from 'react-query'
import React from 'react'
import { HomeScreenView } from "./screens/HomeScreen/HomeScreen.view"

const queryClient = new QueryClient()

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <HomeScreenView />
        </QueryClientProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

