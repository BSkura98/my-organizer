import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteNote } from "../../api/notes/deleteNote";
import { Note as NoteEntity } from "../../entities/Note";

type Props = NoteEntity;

export default function Note({ content, createdAt, id }: Props) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async () => await deleteNote(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });

  return (
    <Card sx={{ minWidth: 275 }} className="note">
      <CardContent>
        <Typography variant="body2">{content}</Typography>
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="caption">
            Created at {createdAt.toLocaleString()}
          </Typography>
          <IconButton
            aria-label="delete"
            onClick={(e) => {
              e.preventDefault();
              mutation.mutate();
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
}
