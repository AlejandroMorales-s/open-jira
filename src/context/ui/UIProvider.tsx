import { FC, useReducer } from "react";
import { uiReducer, UIContext } from "./";

export interface UIState {
  isSidebarOpen: boolean;
  isAddingEntry: boolean;
}

const initialState: UIState = {
  isSidebarOpen: false,
  isAddingEntry: false,
};

export const UIProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const toggleSidebar = () => {
    const { isSidebarOpen } = state;

    if (!isSidebarOpen) dispatch({ type: "UI - Open Sidebar" });
    else dispatch({ type: "UI - Close Sidebar" });
  };

  const toggleIsAddingEntry = () =>
    dispatch({ type: "UI - Toggle adding entry" });

  return (
    <UIContext.Provider
      value={{
        ...state,
        toggleSidebar,
        toggleIsAddingEntry,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
