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
      description: "Pending",
      status: "pending",
    },
    {
      _id: uuidv4(),
      createdAt: Date.now(),
      description: "In progress",
      status: "in-progress",
    },
    {
      _id: uuidv4(),
      createdAt: Date.now(),
      description: "Finished",
      status: "finished",
    },
    {
      _id: uuidv4(),
      createdAt: Date.now(),
      description: "Finished",
      status: "finished",
    },
  ],
};

export const EntriesProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(entriesReducer, initialState);

  const addNewEntry = ({ description }: { description: string }) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: "pending",
    };

    dispatch({ type: "[Entry] Add-Entry", payload: newEntry });
  };

  const updateEntry = ({ entry }: { entry: Entry }) => {
    dispatch({ type: "[Entry] Entry-Updated", payload: entry });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
