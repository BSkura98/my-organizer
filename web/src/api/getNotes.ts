import { createClient } from "./api";

interface ResponseElement {
  content: string;
  createdAt: number[];
  id: number;
}

type Response = ResponseElement[];

export const getNotes = async (): Promise<Response> => {
  const response = await createClient().get("/notes");

  return response?.data;
};
