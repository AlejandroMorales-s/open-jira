import { UIState } from "./";

type Action = { type: "UI - Open Sidebar" } | { type: "UI - Close Sidebar" };

export const uiReducer = (state: UIState, action: Action): UIState => {
  switch (action.type) {
    case "UI - Open Sidebar":
      return {
        ...state,
        isSidebarOpen: true,
      };
    case "UI - Close Sidebar":
      return {
        ...state,
        isSidebarOpen: false,
      };
    default:
      return state;
  }
};
