import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",

    darkTheme: () => {},
    lightTheme: () => {},
    //these two are methods that will be used to change the theme mode from light to dark and vice versa
})

// here we are creating context provider in the same file so that we can use it in the App.jsx file and also we can use it in the ThemeBtn.jsx file
export const ThemeProvider = ThemeContext.Provider

// below is a custom hook that will be used to access the context values in the ThemeBtn.jsx file
export default function useTheme(){
    return useContext(ThemeContext)
}