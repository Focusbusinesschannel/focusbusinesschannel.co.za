'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Initialize theme from localStorage or default to 'light'
        // Intentionally ignoring prefers-color-scheme as per requirements
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute('data-theme', savedTheme);
            if (savedTheme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        } else {
            // Default to light for first-time visitors
            setTheme('light');
            document.documentElement.setAttribute('data-theme', 'light');
            document.documentElement.classList.remove('dark');
        }
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);

        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    // Always render the Provider so useTheme() works during SSR.
    // We defer the specific 'mounted' check to the consumer components if they need to avoid hydration mismatch.
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <script
                dangerouslySetInnerHTML={{
                    __html: `try{if(localStorage.getItem('theme')==='dark' || (!('theme' in localStorage) && false)){document.documentElement.classList.add('dark');document.documentElement.setAttribute('data-theme', 'dark')}else{document.documentElement.classList.remove('dark');document.documentElement.setAttribute('data-theme', 'light')}}catch(e){}`
                }}
            />
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
