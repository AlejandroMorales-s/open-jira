import { createContext } from "react";

interface UIContextProps {
  isSidebarOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;

  //* Methods
  toggleSidebar: () => void;
  toggleIsAddingEntry: () => void;
  toggleIsDragging: () => void;
}

export const UIContext = createContext<UIContextProps>({} as UIContextProps);
