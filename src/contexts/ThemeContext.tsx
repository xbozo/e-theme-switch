import { ReactNode, createContext, useEffect, useState } from "react";

type ThemeContextType = {
    theme: string;
    setTheme: (newTheme: string) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'selectedTheme';

type Props = { children: ReactNode };
export function ThemeProvider({ children }: Props) {
    const [theme, setTheme] = useState(
        localStorage.getItem(STORAGE_KEY) || 'dark'
    );
    
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
