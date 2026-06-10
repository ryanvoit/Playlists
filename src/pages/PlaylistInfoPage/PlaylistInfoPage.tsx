import { useParams } from "react-router-dom";
import { PLAYLISTS } from "../../data";
import "./playlistInfoPage.css"
import { Link } from "react-router-dom";

export function PlaylistInfoPage() {
    const { playlistId } = useParams()
    const playlist = PLAYLISTS[Number(playlistId)]

    if (!playlist) {
		return (
			<div className="playlistInfoPage">
				<h2>PlaylistInfoPage</h2>

				<div 
					className = "playlists"
					data-testid = 'Playlists'>
					<p>Плэйлиста с таким Id нет</p>
				</div>
			</div>
		);
	}

    return (
		<div className="playlistInfoPage">
			<h2>PlaylistInfoPage</h2>

			<div className="playlists">
				<Link to={`/playlists?searchGenre=${playlist.genre.toLowerCase()}`}>
					{`Жанр: ${playlist.genre}`}
				</Link>
				<p>{`Название: ${playlist.name}`}</p>
				<p>Песни: </p>
				<ul>
                    {playlist.songs.map((song) => (
                        <li 
							key={playlist.id}
							className="song"
						>
                            {`${song}`}
                        </li>
                    ))}
                </ul>
			</div>
		</div>
	);
}