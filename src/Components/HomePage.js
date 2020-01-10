import React from 'react';
import { Container } from 'react-bootstrap';

function HomePage() {
	return (
		<div className="body">
			<Container>
				<div>
					<h3 id="page-title">About Me</h3>
					<div className="wrapper">
						<div className="divider div-transparent" />
					</div>
					<img align="right" id="my-pic" src={require('../assets/FQPic.jpg')} alt="My Pic" />
					<a href="https://twitter.com/keehada" target="_blank" rel="noopener noreferrer">
						<img
							id="twitter-icon"
							src={require('../assets/Twitter_Social_Icon_Circle_Color.png')}
							alt="twitter icon"
						/>
					</a>
					<a href="https://instagram.com/keehada" target="_blank" rel="noopener noreferrer">
						<img
							id="instagram-icon"
							src={require('../assets/Instagram_AppIcon_Aug2017.png')}
							alt="instagram icon"
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/frank-quijada-a617b9194/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img id="linkedin-icon" src={require('../assets/LI-In-Bug.png')} alt="linkedin icon" />
					</a>
					<div>
						<h3 id="body-text" align="center">
							Hello, my name is <span id="blue-name">Frank</span>! I am a guy from Texas that makes things
							with code &#128526;.
						</h3>
						<h3 id="body-text" align="center">
							I graduated from <span id="sam">Sam Houston State Univesity</span> with a degree in Computer
							Science.
						</h3>
						<h3 id="body-text" align="center">
							I hope you enjoy my projects {' '}
							<span role="img" aria-label="smiley">
								🙂
							</span>.
						</h3>
						<h3 id="body-text" align="center">
							Languages I've used:{' '}
						</h3>
						<img id="react-logo" src={require('../assets/React-logo.png')} alt="react logo" />
						<img id="python-logo" src={require('../assets/python-logo.png')} alt="python logo" />
						<img id="java-logo" src={require('../assets/Java-logo.png')} alt="java logo" />
						<img id="html-logo" src={require('../assets/html-logo.png')} alt="html logo" />
						<img id="css-logo" src={require('../assets/css-logo.png')} alt="css logo" />
						<img id="js-logo" src={require('../assets/js-logo.png')} alt="js logo" />
					</div>
				</div>
			</Container>
		</div>
	);
}

export default HomePage;
