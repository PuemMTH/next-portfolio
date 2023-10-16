import React, { useState, useEffect, createContext, ReactNode, useMemo } from "react";
import { useLocalStorage } from "usehooks-ts";
import { ThemeList } from "@/utils/Themes";


const DEFAULT_THEME = ThemeList[1]; // dark

const defaultContextValue: ThemeContextValue = {
    theme: DEFAULT_THEME,
    setTheme: () => {},
    themeList: ThemeList
};

export const ThemeContext = createContext<ThemeContextValue>(defaultContextValue);

interface ThemeProviderProps {
	children: ReactNode;
}

interface ThemeContextValue {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    themeList: string[];
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = useLocalStorage<string>("theme", DEFAULT_THEME);
    
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const contextValue = useMemo(() => ({
        theme,
        setTheme,
        themeList: ThemeList,
    }), [theme, setTheme] );

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
