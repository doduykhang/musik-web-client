import { BASE_URL } from "app-constants";

export function getAssets(path: string) {
	return `${BASE_URL}/${path}`;
}
