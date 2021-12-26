import { Theme } from "@react-navigation/native"

type ThemeAction = 
| { type: 'set_dark_theme' }
| { type: 'set_light_theme' }

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark',
    divideColor: string;
}

export const lighTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    divideColor: 'grey',
    colors: {
        primary: '#02243d',
        background: 'white',
        card: 'white',
        text: 'black',
        border: 'black',
        notification: 'teal',
    }
}

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    divideColor: '#39B2E6',
    colors: {
        primary: '#39B2E6',
        background: 'black',
        card: 'black',
        text: 'white',
        border: 'white',
        notification: 'teal',
    }
}

export const themeReducer = (state: ThemeState, action: ThemeAction ): ThemeState => {

    switch (action.type) {
        case 'set_light_theme':
            return { ...lighTheme }
            break;
        case 'set_dark_theme':
            return { ...darkTheme }
            break;
        default:
            return state;
            break;
    }

}