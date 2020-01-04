import React from 'react';

function Projects() {
	return (
		<div className="body">
			<h1 align="center" className="title">
				Projects
			</h1>
			<div id="twitch-card" className="card">
				<a href="https://twitch.tv">
					<img
						className="card-img-top"
						id="twitch-card-pic"
						src={require('../assets/twitch.png')}
						alt="twitch logo"
						href="https://twitch.tv/"
					/>
				</a>
				<div className="card-body">
					<a href="https://twitch.tv">
						<h5 className="card-title">Twitch Leaderboard</h5>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Projects;
