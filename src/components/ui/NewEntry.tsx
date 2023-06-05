import { useState, ChangeEvent, useContext } from "react";
import { Button, Box, TextField } from "@mui/material";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import AddIcon from "@mui/icons-material/Add";
import { EntriesContext } from "@/context/entries";
import { UIContext } from "@/context/ui";

export const NewEntry = () => {
  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, toggleIsAddingEntry } = useContext(UIContext);

  const onTextChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const onCancel = () => {
    toggleIsAddingEntry();
    setInputValue("");
  };

  const onSave = () => {
    if (!inputValue) return;

    addNewEntry({ description: inputValue });
    setInputValue("");
    toggleIsAddingEntry();
    setTouched(false);
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1.5 }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="New entry"
            autoFocus
            multiline
            label="New entry"
            helperText={!inputValue.length && touched && "Enter a value"}
            error={!inputValue.length && touched}
            value={inputValue}
            onChange={onTextChange}
            onBlur={() => setTouched(true)}
          />

          <Box display="flex" justifyContent="space-between">
            <Button onClick={onCancel} variant="text" color="secondary">
              Cancel
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveAltIcon />}
              onClick={onSave}
            >
              Save
            </Button>
          </Box>
        </>
      ) : (
        <Button
          onClick={() => toggleIsAddingEntry()}
          variant="outlined"
          fullWidth
          startIcon={<AddIcon />}
        >
          Add task
        </Button>
      )}
    </Box>
  );
};
