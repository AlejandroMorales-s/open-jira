import { Paper, List } from "@mui/material";
import { EntryCard } from "./EntryCard";
import { EntryStatus } from "@/interfaces";
import { FC, useContext, useMemo, DragEvent } from "react";
import { EntriesContext } from "@/context/entries";
import { UIContext } from "@/context/ui";
import styles from "./EntryList.module.css";

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, toggleIsDragging } = useContext(UIContext);

  //* If the entries are the same, the filter doesn't execute and just return the old result of the filter
  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    const id = e.dataTransfer.getData("text");

    const entry = entries.find((entry) => entry._id === id)!;

    entry.status = status;

    updateEntry({ entry });
    toggleIsDragging();
  };

  const allowDrop = (e: DragEvent<HTMLDivElement>) => e.preventDefault();

  return (
    <div
      onDrop={onDrop}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ""}
    >
      <Paper
        sx={{
          height: "calc(100vh - 200px)",
          overflowY: "auto",
          backgroundColor: "transparent",
          padding: "0 8px",
        }}
      >
        <List sx={{ opacity: isDragging ? 0.25 : 1, transition: "all .3s" }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
