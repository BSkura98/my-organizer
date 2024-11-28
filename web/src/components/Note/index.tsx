import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { Note as NoteEntity } from "../../entities/Note";

type Props = NoteEntity;

export default function Note({ content, createdAt }: Props) {
  return (
    <Card sx={{ minWidth: 275 }} className="note">
      <CardContent>
        <Typography variant="body2">{content}</Typography>
        <Typography variant="caption">
          Created at {createdAt.toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
}
