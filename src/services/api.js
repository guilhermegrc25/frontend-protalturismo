import axios from "axios";
const api = axios.create({
    baseURL: 'https://backend-portalturismo-kcl1.onrender.com/api'
})
export default api;