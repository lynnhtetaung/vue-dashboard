import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3000/api' // Replace with your backend API URL
    });
  }

  async loginUser(userData) {
    try {
      const response = await this.api.post('/login', userData);
      return response.data;
    } catch (error) {
      throw new Error('Error logging in: ' + error.message);
    }
  }

  async registerUser(userData) {
    try {
      const response = await this.api.post('/register', userData);
      return response.data;
    } catch (error) {
      throw new Error('Error registering user: ' + error.message);
    }
  }
}

export default new ApiService();
