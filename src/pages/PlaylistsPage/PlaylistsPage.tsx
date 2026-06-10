import { PLAYLISTS } from "../../data";
import { Link } from "react-router-dom";
import "./playlistspage.css"
import { useSearchParams } from "react-router-dom";
import { ChangeEvent } from "react";

export function PlaylistsPage() {
    const [searchParam, setSearchParam] = useSearchParams()

    const handleSearchName = (event: ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.target;
        setSearchParam({ 
            searchGenre,
            searchName: value.toLowerCase() 
        });
    };

    const handleSearchGenre = (event: ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.target;
        setSearchParam({ 
            searchGenre: value.toLowerCase(),
            searchName
        });
    };

    const searchName = searchParam.get('searchName') || ''
    const searchGenre = searchParam.get('searchGenre') || ''

    const filteredPlaylists = PLAYLISTS
        .filter(({ name }) => name.toLowerCase().includes(searchName))
        .filter(({ genre }) => genre.toLowerCase().includes(searchGenre));

    return (
        <div className="playlistsPage">
            <h2>PlaylistsPage</h2>
        
            <div className="playlists">
                <label>
				    Введите название плэйлиста {''}
				    <input type="text" value={searchName} onChange={handleSearchName} data-testid='Playlist' />
			    </label>

                <label>
				    Введите жанр плэйлиста {''}
				    <input type="text" value={searchGenre} onChange={handleSearchGenre} data-testid='Genre' />
			    </label>    

                {filteredPlaylists.map(({ id, name, genre }) => (
                    genre != "Non Music" && (
                        <Link to={`/playlists/${id}`} key={id}>
                            {name}
                        </Link> 
                    )
                ))}
            </div>
        </div>
    )
}