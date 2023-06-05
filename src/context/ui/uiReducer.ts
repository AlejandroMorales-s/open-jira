import { UIState } from "./";

type Action =
  | { type: "UI - Open Sidebar" }
  | { type: "UI - Close Sidebar" }
  | { type: "UI - Toggle adding entry" };

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
    case "UI - Toggle adding entry":
      return {
        ...state,
        isAddingEntry: !state.isAddingEntry,
      };
    default:
      return state;
  }
};
