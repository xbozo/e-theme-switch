import { ReactNode, createContext, useEffect, useState } from "react";

type Theme = 'dark' | 'light';

type ThemeContextType = {
    theme: Theme;
    setTheme: (t: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'selectedTheme';

type Props = { children: ReactNode };
export function ThemeProvider({ children }: Props) {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    const [theme, setTheme] = useState<Theme>(savedTheme as Theme || 'dark');
    
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
