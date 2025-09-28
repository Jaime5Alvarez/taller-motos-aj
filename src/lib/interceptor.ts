import axios from "axios";
import { toast } from "sonner";

export const apiClient = axios.create({
  baseURL: "/",
});

(() => {
  apiClient.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => Promise.reject(error),
  );
  // Add a response interceptor
  apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
      // If the error status is 401 and there is no originalRequest._retry flag,
      // it means the token has expired and we need to refresh it
      if (error.response.status === 401) {
        window.location.href = "back-office/login";
      }

      else if (error.response.status === 400 && error.response.data.error) {
        toast.error(error.response.data.error);
      }

      return Promise.reject(error);
    },
  );
})();
