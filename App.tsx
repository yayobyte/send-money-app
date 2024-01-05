import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen } from "./screens/HomeScreen";
import { ThemeProvider } from "./config/ThemeContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <HomeScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

