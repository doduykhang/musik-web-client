import { SongDTO } from "repositories/song-repository";
import { getAssets } from "utils/utils";

interface props {
	songs: SongDTO[]
}

export const SongDropDown: React.FC<props> = ({ songs }) => {
	return (
		<div className="w-full rounded-md bg-secondary text-white p-2">
			<ul>
				{songs.map(song => {
					return (
						<li key={song.id}>
							<div className="flex items-center gap-2">
								<img
									src={getAssets(song.cover)}
									alt={song.title}
									className="w-10 h-10"
								/>
								<div>
									<p>{song.title}</p>
									<p className="text-sm text-grey">{song.artists[0]?.name}</p>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
