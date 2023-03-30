import { FC, useReducer } from "react";
import { EntriesContext, entriesReducer } from "./";
import { Entry } from "@/interfaces";
import { v4 as uuidv4 } from "uuid";

export interface EntriesState {
  entries: Entry[];
}

const initialState: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      createdAt: Date.now(),
      description: "test",
      status: "pending",
    },
    {
      _id: uuidv4(),
      createdAt: Date.now(),
      description: "test2",
      status: "in-progress",
    },
    {
      _id: uuidv4(),
      createdAt: Date.now(),
      description: "test2",
      status: "finished",
    },
  ],
};

export const EntriesProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(entriesReducer, initialState);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
