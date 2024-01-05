import ApiClient from './ApiClient';

const apiUrl = 'http://localhost';
const apiPort = 3001
const apiClient = new ApiClient(`${apiUrl}:${apiPort}`);

const ApiService = {
  get: <T>(endpoint: string) => apiClient.get<T>(endpoint),
  post: <T>(endpoint: string, body: object) => apiClient.post<T>(endpoint, body),
};

export default ApiService;
