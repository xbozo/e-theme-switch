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
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')       // A light mode é passada como padrão
        }
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
