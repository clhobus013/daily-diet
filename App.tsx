import { ActivityIndicator, Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import theme from './src/theme';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';

export default function App() {
  const [fontsLoaded, error] = useFonts({
    NunitoSans_400Regular, NunitoSans_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Text>Teste</Text> :  <ActivityIndicator/>}
    </ThemeProvider>
  );
}
