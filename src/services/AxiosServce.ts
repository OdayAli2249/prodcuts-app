import axios, { AxiosInstance } from "axios";
import { config } from "../config";

export class AxiosService {
    private static instance: AxiosService;
    private axiosInstance: AxiosInstance;

    private constructor() {
        this.axiosInstance = axios.create({
            baseURL: config.apiBaseUrl,
        });
    }

    public static getInstance(): AxiosInstance {
        if (!AxiosService.instance) {
            AxiosService.instance = new AxiosService();
        }
        return AxiosService.instance.axiosInstance;
    }
}
