import axios from "axios";
import { toast } from "sonner";

export const apiClient = axios.create({
  baseURL: "/",
});

apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      window.location.href = "back-office/login";
    } else if (error.response.status === 400 && error.response.data.error) {
      toast.error(error.response.data.error);
    }

    return Promise.reject(error);
  },
);
