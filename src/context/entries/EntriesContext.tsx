import { createContext } from "react";
import { Entry } from "@/interfaces";

interface ContextProps {
  entries: Entry[];
  addNewEntry: ({ description }: { description: string }) => void;
  updateEntry: ({ entry }: { entry: Entry }) => void;
}

export const EntriesContext = createContext({} as ContextProps);
