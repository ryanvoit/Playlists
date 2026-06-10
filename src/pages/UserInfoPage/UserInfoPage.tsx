import { Link, useParams } from "react-router-dom";
import { USERS } from "../../data";
import "./UserInfoPage.css";
import { PLAYLISTS } from "../../data";

export function UserInfoPage() {
	const { userId } = useParams();
	const user = USERS[Number(userId)];
	const playlist = PLAYLISTS[Number(userId)]

	if (!user) {
		return (
			<div className="userInfoPage">
				<h2>UserInfoPage</h2>

				<div className="users">
					<p>Пользователя с таким userId нет</p>
				</div>
			</div>
		);
	}

	return (
		<div className="userInfoPage">
			<h2>UserInfoPage</h2>

			<div className="users">
				<p>{user.jobTitle}</p>
				<p>{user.email}</p>
				<img src={user.avatar} alt="" width={200} height={200} />
				<p>{user.fullName}</p>
				<p>{user.bio}</p>
				{ user.playlist && (
					<div>
						<span>Плэйлист: </span>
						<Link to={`/playlists/${user.id}`}>
								{playlist.name}
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}
