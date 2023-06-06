import { UIState } from "./";

type Action =
  | { type: "UI - Toggle sidebar" }
  | { type: "UI - Toggle adding entry" }
  | { type: "UI - Toggle start dragging" };

export const uiReducer = (state: UIState, action: Action): UIState => {
  switch (action.type) {
    case "UI - Toggle sidebar":
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };

    case "UI - Toggle adding entry":
      return {
        ...state,
        isAddingEntry: !state.isAddingEntry,
      };
    case "UI - Toggle start dragging":
      return {
        ...state,
        isDragging: !state.isDragging,
      };
    default:
      return state;
  }
};
