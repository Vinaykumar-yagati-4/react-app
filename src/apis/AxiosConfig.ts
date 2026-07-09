import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8081/api/customers/signup",
    headers: {
        "Content-Type": "application/json"
    }
});

export default axiosInstance;