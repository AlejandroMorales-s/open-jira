import { FC, DragEvent, useContext } from "react";
import { Entry } from "@/interfaces";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { UIContext } from "@/context/ui";

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const { description } = entry;

  const { isDragging, toggleIsDragging } = useContext(UIContext);

  const onDragStart = (e: DragEvent) => {
    e.dataTransfer.setData("text", entry._id);
    toggleIsDragging();
  };

  return (
    <Card
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={() => toggleIsDragging()}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>{description}</Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}
        >
          <Typography variant="body2">hace 30 min</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
