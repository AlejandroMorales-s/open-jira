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

  return (
    <UIContext.Provider
      value={{
        isSidebarOpen: false,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
