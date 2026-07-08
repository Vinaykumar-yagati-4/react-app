import axios from "axios";
import type { RegisterRequest } from "../interfaces/RegisterRequest";
import axiosInstance from "./AxiosConfig";

export const registerUser = (data: RegisterRequest) => {
    return axiosInstance.post("/customers/signup", data);
};
