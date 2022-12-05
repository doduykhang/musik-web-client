import { BASE_URL } from "app-constants";
import axios from "axios";

export const api = axios.create({
	baseURL: BASE_URL
});
