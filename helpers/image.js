import { API_URL } from "@env";

export const getImageUrl = (url) => {
  return `${API_URL}/uploads/${url}`;
};
