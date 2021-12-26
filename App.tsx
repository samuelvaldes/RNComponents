import 'react-native-gesture-handler';
import * as React from 'react';
import { DefaultTheme, NavigationContainer, DarkTheme, Theme  } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

export default function App() {

  // const customTheme: Theme = {
  //   dark: true,
  //   colors: {
  //     ...DarkTheme.colors,
  //     // primary: string;
  //     // background: 'grey',
  //     // card: string;
  //     // text: string;
  //     // border: string;
  //     // notification: string;
  //   },
  // }

  return (
    <AppState>
        <Navigation/>
    </AppState>

  )
}

const AppState = ({children}:any) => {

  return (
    <ThemeProvider>
      { children }
    </ThemeProvider>
  )
}