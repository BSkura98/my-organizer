import { createClient } from "./api";

type Response = {
  content: string;
  createdAt: number[];
  id: number;
}[];

export const getNotes = async (): Promise<Response> => {
  const response = await createClient().get("/notes");

  return response?.data;
};
