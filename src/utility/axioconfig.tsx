import axios from "axios";


const apiClient = axios.create({
  baseURL: 'https://dev-prisvio-api.prismtech.vn/api'
});

export default apiClient;