import axios from "axios";

// 1. Buat instance Axios dengan Base URL dari file .env
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://6af14da611a6aa866e801eb1.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});

// 2. Implementasi Axios Interceptor (Nilai Plus Sesuai Catatan Misi)
apiClient.interceptors.request.use(
  (config) => {
    console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("[API Error]:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// 3. Fungsi CRUD untuk endpoint /movies
export const getMovies = async () => {
  const response = await apiClient.get("/movies");
  return response.data;
};

export const addMovie = async (movieData) => {
  const response = await apiClient.post("/movies", movieData);
  return response.data;
};

export const updateMovie = async (id, movieData) => {
  const response = await apiClient.put(`/movies/${id}`, movieData);
  return response.data;
};

export const deleteMovie = async (id) => {
  const response = await apiClient.delete(`/movies/${id}`);
  return response.data;
};

export default apiClient;