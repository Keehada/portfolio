import React from 'react';
import { Container } from 'react-bootstrap';

function HomePage() {
	return (
		<div className="body">
			<Container>
				<div className="section-border">
					<h3 className="section-title">About Me</h3>
				</div>

				<div className="section">
					<h5 id="body-text">
						Hello, my name is <span id="blue-name">Frank</span>! I am a guy from The Woodlands, Texas that
						makes things with code &#128526;.
					</h5>
					<h5 id="body-text">
						I graduated from <span id="sam">Sam Houston State Univesity</span> with a degree in Computer
						Science.
					</h5>
					<h5 id="body-text">
						I hope you enjoy my projects {' '}
						<span role="img" aria-label="smiley">
							🙂
						</span>.
					</h5>
				</div>

				<div className="section-border">
					<h3 className="section-title">Social Media</h3>
				</div>

				<div className="row social-section">
					{/* Twitter */}
					<a id="body-text" href="https://twitter.com/Keehada" target="_blank" rel="noopener noreferrer">
						<img src={require('../assets/Twitter_Social_Icon_Circle_Color.png')} alt="Twitter Icon" />{' '}
						Twitter
					</a>

					{/* Instagram */}
					<a id="body-text" href="https://instagram.com/Keehada" target="_blank" rel="noopener noreferrer">
						<img src={require('../assets/Instagram_AppIcon_Aug2017.png')} alt="Instagram Icon" />
						{'  '}Instagram
					</a>

					{/* LinkedIn */}
					<a
						id="body-text"
						href="https://www.linkedin.com/in/frank-quijada-a617b9194/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={require('../assets/LI-In-Bug.png')} alt="LinkedIn Icon" />
						LinkedIn
					</a>

					{/* Facebook */}
					<a
						id="body-text"
						href="https://www.facebook.com/frank.quijada"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={require('../assets/f_logo_RGB-Blue_512.png')} alt="Facebook Icon" />
						{'  '}Facebook
					</a>

					{/* GitHub */}
					<a id="body-text" href="https://github.com/Keehada" target="_blank" rel="noopener noreferrer">
						<img src={require('../assets/GitHub-Mark-Light-120px-plus.png')} alt="GitHub Icon" />
						{'  '}GitHub
					</a>
				</div>
			</Container>
		</div>
	);
}

export default HomePage;
