import { FC, useReducer } from "react";
import { uiReducer, UIContext } from "./";

export interface UIState {
  isSidebarOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const initialState: UIState = {
  isSidebarOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

export const UIProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const toggleSidebar = () => dispatch({ type: "UI - Toggle sidebar" });

  const toggleIsAddingEntry = () =>
    dispatch({ type: "UI - Toggle adding entry" });

  const toggleIsDragging = () =>
    dispatch({ type: "UI - Toggle start dragging" });

  return (
    <UIContext.Provider
      value={{
        ...state,
        toggleSidebar,
        toggleIsAddingEntry,
        toggleIsDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
