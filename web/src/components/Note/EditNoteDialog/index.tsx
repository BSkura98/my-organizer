import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

import { Note } from "../../../entities/Note";

interface Props {
  note: Note;
  open: boolean;
  onClose: () => void;
}

export const EditNoteDialog = ({ note, open, onClose }: Props) => {
  const [content, setContent] = useState<string>(note.content);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        component: "form",
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          onClose();
        },
      }}
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle>Edit note</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="content"
          name="content"
          label="Content"
          type="text"
          fullWidth
          variant="standard"
          multiline
          minRows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button type="submit">Edit</Button>
      </DialogActions>
    </Dialog>
  );
};
