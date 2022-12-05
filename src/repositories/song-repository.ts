import axios from "axios";
import { useQuery } from "react-query";
import { api } from "utils";
import { ArtistDTO } from "./artist-repository";

export interface SongDTO {
	id: number
	createdAt: Date
	title: string
	duration: number
	releaseDate: Date
	artists: ArtistDTO[]
	cover: string
	audio: string
}

interface FindSongRequest extends Record<string, any> {
	title: string
	page?: number
	size?: number
}

const findSongs = async (request: FindSongRequest): Promise<SongDTO[]> => {
	const param = new URLSearchParams(request).toString();
	const { data } = await api.get<SongDTO[]>(`song?${param}`);
	return data;
};

export const useFindSongs = (
	title: string,
	page: number = 1,
	size: number = 10,
	enabled: boolean = true
) => {
	return useQuery<SongDTO[], Error>(
		["find-songs", title],
		() => findSongs({ title, page, size }),
		{ enabled }
	);
};
