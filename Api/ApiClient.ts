class ApiClient {
  private baseUrl: string;
  
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  
  async get<T>(endpoint: string): Promise<T> {
    try {
      const response = await fetch(`${this.baseUrl}/${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      const data: T = await response.json();
      return data;
    } catch (error) {
      console.error('Error during GET request:', error);
      throw error;
    }
  }
  
  async post<T>(endpoint: string, body: object): Promise<T> {
    try {
      const response = await fetch(`${this.baseUrl}/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers as needed
        },
        body: JSON.stringify(body),
      });
      
      const data: T = await response.json();
      return data;
    } catch (error) {
      console.error('Error during POST request:', error);
      throw error;
    }
  }
}

export default ApiClient;
