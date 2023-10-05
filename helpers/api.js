import { API_URL } from "@env";

export const api = (endpoint) => {
  return `${API_URL}/api/${endpoint}`;
};
