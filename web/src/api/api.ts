import axios, { AxiosInstance } from "axios";

export const createClient = (): AxiosInstance => {
  return axios.create({
    baseURL: "http://localhost:8080/api",
  });
};
