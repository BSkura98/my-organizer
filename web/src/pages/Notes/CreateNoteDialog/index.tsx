import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createNote } from "../../../api/notes/createNote";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const CreateNoteDialog = ({ open, onClose }: Props) => {
  const [content, setContent] = useState<string>("");
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async () =>
      await createNote({ content, createdAt: new Date() }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      onClose();
    },
  });

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        component: "form",
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          mutation.mutate();
        },
      }}
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle>Create note</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
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
        <Button type="submit" disabled={mutation.isPending}>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};
