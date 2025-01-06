import React from "react";
import { useQuery } from "@tanstack/react-query";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import Note from "../../components/Note";
import { Wrapper } from "./styled";
import { getNotes } from "../../api/getNotes";
import Typography from "@mui/material/Typography";

export default function Notes() {
  const query = useQuery({
    queryKey: ["notes"],
    queryFn: async () => await getNotes(),
  });

  return (
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
        <Button variant="text" startIcon={<AddIcon />}>
          Create
        </Button>
      </Stack>
      {query.data?.map(({ content, createdAt, id }) => (
        <Note
          content={content}
          createdAt={new Date(...createdAt)}
          key={id}
        ></Note>
      ))}
    </Wrapper>
  );
}
