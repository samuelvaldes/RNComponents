import React, {createContext, useReducer} from 'react';
import { lighTheme, themeReducer, ThemeState } from './themeReducer';

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {


    const [theme, dispatch] = useReducer(themeReducer, lighTheme) //TODO: Leer el tema global del SO

    const setDarkTheme = () => {
        dispatch({ type: 'set_dark_theme' })
        console.log('Set DarkTheme');
    }

    const setLightTheme = () => {
        dispatch({ type: 'set_light_theme' })
        console.log('Set LightTheme');
    }

    return(
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme,
        }}>
            { children }
        </ThemeContext.Provider>
    )
}
