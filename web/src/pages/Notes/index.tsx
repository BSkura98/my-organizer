import React from "react";
import { useQuery } from "@tanstack/react-query";

import Note from "../../components/Note";
import { Wrapper } from "./styled";
import { getNotes } from "../../api/getNotes";

export default function Notes() {
  const query = useQuery({
    queryKey: ["notes"],
    queryFn: async () => await getNotes(),
  });

  return (
    <Wrapper>
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
