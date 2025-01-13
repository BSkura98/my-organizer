import { Note } from "../../entities/Note";
import { createClient } from "../api";

type Request = Partial<Omit<Note, "id">>;

type Response = {
  content: string;
  createdAt: number[];
  id: number;
}[];

export const updateNote = async (
  id: number,
  request: Request
): Promise<Response> => {
  const response = await createClient().patch(`/notes/${id}`, request);

  return response?.data;
};
