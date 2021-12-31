import React, {createContext, useReducer, useEffect} from 'react';
import { Appearance, AppState, useColorScheme } from 'react-native';
import { lighTheme, darkTheme, themeReducer, ThemeState } from './themeReducer';

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
    const [theme, dispatch] = useReducer(themeReducer, (Appearance.getColorScheme() === 'light') ? lighTheme : darkTheme) //TODO: Leer el tema global del SO

    //SOLO FUNCIONA EN iOS para cambiar el theme desde sistema operativo
    // const colorScheme = useColorScheme();
    // useEffect(() => {
    //     (colorScheme==='light') ?
    //         setLightTheme
    //     :   setDarkTheme
    // }, [colorScheme])

    //ESTO FUNCIONA EN iOS y Android para para cambiar el theme desde sistema operativo
    useEffect(() => {
        AppState.addEventListener('change', (status)=>{
            if (status === 'active') {
                ( Appearance.getColorScheme() === 'light' ) 
                ? setLightTheme() 
                : setDarkTheme();
            }
        })
    }, [])

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
