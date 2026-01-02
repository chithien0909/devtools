import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsStore {
    fontSize: number;
    wordWrap: boolean;
    theme: 'light' | 'dark' | 'system';
    historyLimit: number;

    setFontSize: (size: number) => void;
    setWordWrap: (wrap: boolean) => void;
    setTheme: (theme: 'light' | 'dark' | 'system') => void;
}

export const useSettingsStore = create<SettingsStore>()(
    persist(
        (set) => ({
            fontSize: 14,
            wordWrap: true,
            theme: 'dark',
            historyLimit: 50,

            setFontSize: (fontSize) => set({ fontSize }),
            setWordWrap: (wordWrap) => set({ wordWrap }),
            setTheme: (theme) => set({ theme }),
        }),
        {
            name: 'antigravity-settings',
        }
    )
);
