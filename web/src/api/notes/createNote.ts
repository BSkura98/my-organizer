import { createClient } from "../api";

type Request = {
  content: string;
  createdAt: Date;
};

type Response = {
  content: string;
  createdAt: number[];
  id: number;
}[];

export const createNote = async (request: Request): Promise<Response> => {
  const response = await createClient().post("/notes", request);

  return response?.data;
};
