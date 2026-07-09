
//import type { LoginRequest } from "../interfaces/LoginRequest";
import type { RegisterRequest } from "../interfaces/RegisterRequest";
import axiosInstance from "./AxiosConfig";



export const registerUser = (data: RegisterRequest) => {
    return axiosInstance.post("/api/customers/signup", data);
};

/*export const serviceLogin = async (data: LoginRequest) => {

    return await axiosInstance.post("/customers/login", data);

 }*/