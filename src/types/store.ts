export interface ToolState {
    id: string;
    name: string;
    category: string;
    input: string;
    output: string;
    options: Record<string, any>;
}

export interface UIState {
    isSidebarOpen: boolean;
    activeToolId: string | null;
    theme: 'light' | 'dark' | 'system';
    searchQuery: string;
}

export interface SettingsState {
    fontSize: number;
    wordWrap: boolean;
    historyLimit: number;
    autoFormat: boolean;
}
