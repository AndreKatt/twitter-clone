import { axios } from "../core/axios";

export const uploadFiles = async (payload: File[]): Promise<string[]> => {
  const formData = new FormData();
  payload.forEach((file) => formData.append("file", file));

  const { data } = await axios.post("/api/files/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};
