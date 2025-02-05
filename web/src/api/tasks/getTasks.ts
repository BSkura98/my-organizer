import { Task } from "../../entities/Task";
import { createClient } from "../api";

type Response = Task[];

export const getTasks = async (): Promise<Response> => {
  const response = await createClient().get("/tasks");

  return response?.data;
};
