import React from 'react';
import { Container } from 'react-bootstrap';

function Projects() {
	return (
		<div className="body">
			<Container>
				<h3 align="center" id="page-title">
					Projects
				</h3>
				<div className="wrapper">
					<div className="divider div-transparent" />
				</div>
				<div id="twitch-card" className="card">
					<a href="https://twitch.tv">
						<img
							className="card-img-top"
							src={require('../assets/twitch-logo.webp')}
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
			</Container>
		</div>
	);
}

export default Projects;
