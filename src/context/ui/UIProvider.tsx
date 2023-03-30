import { FC, useReducer } from "react";
import { uiReducer, UIContext } from "./";

export interface UIState {
  isSidebarOpen: boolean;
}

const initialState: UIState = {
  isSidebarOpen: false,
};

export const UIProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const toggleSidebar = () => {
    const { isSidebarOpen } = state;

    if (!isSidebarOpen) dispatch({ type: "UI - Open Sidebar" });
    else dispatch({ type: "UI - Close Sidebar" });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        toggleSidebar,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
