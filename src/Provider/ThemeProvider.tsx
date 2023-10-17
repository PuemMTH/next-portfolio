import React, { useState, useEffect, createContext, ReactNode, useMemo } from "react";
import { useLocalStorage } from "usehooks-ts";
import { ThemeList } from "@/utils/Themes";

import Router from "next/router";


const DEFAULT_THEME = ThemeList[1]; // dark

const defaultContextValue: ThemeContextValue = {
    theme: DEFAULT_THEME,
    setTheme: () => {},
    themeList: ThemeList,
    loading: false,
    setLoading: () => {}
};

export const ThemeContext = createContext<ThemeContextValue>(defaultContextValue);

interface ThemeProviderProps {
	children: ReactNode;
}

interface ThemeContextValue {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    themeList: string[];
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = useLocalStorage<string>("theme", DEFAULT_THEME);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
		const start = () => setLoading(true);
		const complete = () => setLoading(false);

		Router.events.on("routeChangeStart", start);
		Router.events.on("routeChangeComplete", complete);
		Router.events.on("routeChangeError", complete);

		return () => {
			Router.events.off("routeChangeStart", start);
			Router.events.off("routeChangeComplete", complete);
			Router.events.off("routeChangeError", complete);
		};
	}, []);

    
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const contextValue = useMemo(() => ({
        theme,
        setTheme,
        themeList: ThemeList,
        loading: loading,
        setLoading: setLoading
    }), [theme, setTheme, loading, setLoading] );

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
