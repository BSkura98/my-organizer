import { createClient } from "../api";

export const deleteNote = async (id: number): Promise<void> => {
  await createClient().delete(`/notes/${id}`);
};
