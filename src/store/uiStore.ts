import { create } from 'zustand';

interface UIStore {
    isSidebarOpen: boolean;
    activeToolId: string | null;
    searchQuery: string;

    setSidebarOpen: (open: boolean) => void;
    toggleSidebar: () => void;
    setActiveToolId: (id: string | null) => void;
    setSearchQuery: (query: string) => void;
}

export const useUIStore = create<UIStore>((set) => ({
    isSidebarOpen: true,
    activeToolId: null,
    searchQuery: '',

    setSidebarOpen: (open) => set({ isSidebarOpen: open }),
    toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
    setActiveToolId: (id) => set({ activeToolId: id }),
    setSearchQuery: (query) => set({ searchQuery: query }),
}));
