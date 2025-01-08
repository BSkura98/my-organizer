import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";

import Note from "../../components/Note";
import { Wrapper } from "./styled";
import { getNotes } from "../../api/notes/getNotes";
import { CreateNoteDialog } from "./CreateNoteDialog";

export default function Notes() {
  const query = useQuery({
    queryKey: ["notes"],
    queryFn: async () => await getNotes(),
  });
  const [createNoteDialogOpen, setCreateNoteDialogOpen] =
    useState<boolean>(false);

  return (
    <>
      {createNoteDialogOpen && (
        <CreateNoteDialog
          open={createNoteDialogOpen}
          onClose={() => setCreateNoteDialogOpen(false)}
        />
      )}
      <Wrapper>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Notes
          </Typography>
          <Button
            variant="text"
            startIcon={<AddIcon />}
            onClick={() => setCreateNoteDialogOpen(true)}
          >
            Create
          </Button>
        </Stack>
        {query.data?.map(({ content, createdAt, id }) => (
          <>
            <Note
              content={content}
              createdAt={
                new Date(
                  createdAt[0],
                  createdAt[1] - 1,
                  createdAt[2],
                  createdAt[3],
                  createdAt[4],
                  createdAt[5]
                )
              }
              id={id}
              key={id}
            ></Note>
          </>
        ))}
      </Wrapper>
    </>
  );
}
