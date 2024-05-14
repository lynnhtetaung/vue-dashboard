import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getTrackings() {
    return apiClient.get('/trackings');
  },
  getTracking(id) {
    return apiClient.get(`/trackings/${id}`);
  },
  addTracking(trackingInfo) {
    return apiClient.post('/trackings', trackingInfo);
  },
  updateTracking(id, trackingInfo) {
    return apiClient.put(`/trackings/${id}`, trackingInfo);
  },
  deleteTracking(id) {
    return apiClient.delete(`/trackings/${id}`);
  }
};
