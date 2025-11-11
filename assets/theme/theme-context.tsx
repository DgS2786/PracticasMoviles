import { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextProps {
    toolbarColor: string;
    setToolbarColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [toolbarColor, setToolbarColor] = useState('#2196F3');
    return (
        <ThemeContext.Provider value={{ toolbarColor, setToolbarColor }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within a ThemeProvider');
    return context;
};
