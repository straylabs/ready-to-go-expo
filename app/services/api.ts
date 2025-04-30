import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { StorageKey, StorageUtils } from "@/utils/Storage";

// API configuration
const API_CONFIG = {
  BASE_URL: "https://api.example.com",
  TIMEOUT: 30000,
  HEADERS: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

// Create axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: API_CONFIG.HEADERS,
});

// Request interceptor
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Get the token from storage
    const token = StorageUtils.getString(StorageKey.USER_TOKEN);

    // If token exists, add it to the headers
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // You can transform the response data here if needed
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config;

    // Handle network errors
    if (error.message === "Network Error") {
      // You could dispatch a notification or show a toast here
      console.error("Network error - please check your internet connection");
    }

    // Handle timeout errors
    if (error.code === "ECONNABORTED") {
      console.error("Request timeout - the server took too long to respond");
    }

    return Promise.reject(error);
  }
);

// API response types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

export interface ApiError {
  message: string;
  status: number;
  errors?: Record<string, string[]>;
}

// Helper methods for common HTTP methods
export const api = {
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response = await apiClient.get<ApiResponse<T>>(url, config);
    return response.data.data;
  },

  post: async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const response = await apiClient.post<ApiResponse<T>>(url, data, config);
    return response.data.data;
  },

  put: async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const response = await apiClient.put<ApiResponse<T>>(url, data, config);
    return response.data.data;
  },

  patch: async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const response = await apiClient.patch<ApiResponse<T>>(url, data, config);
    return response.data.data;
  },

  delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response = await apiClient.delete<ApiResponse<T>>(url, config);
    return response.data.data;
  },
};

export default apiClient;
