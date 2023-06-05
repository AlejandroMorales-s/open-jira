import { createContext } from "react";

interface UIContextProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  toggleIsAddingEntry: () => void;
  isAddingEntry: boolean;
}

export const UIContext = createContext<UIContextProps>({} as UIContextProps);
