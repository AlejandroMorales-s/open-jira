import { createContext } from "react";

interface UIContextProps {
  isSidebarOpen: false;
}

export const UIContext = createContext<UIContextProps>({} as UIContextProps);
