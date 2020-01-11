import React from 'react';
import { Container } from 'react-bootstrap';

function Resume() {
	return (
		<div className="body">
			<Container>
				<h3 id="page-title">Resume</h3>
				<div className="wrapper">
					<div className="divider div-transparent" />
				</div>
				<h3 align="center" id="body-text">
					CLICK {''}
					<a href="https://bit.ly/2t7CpWD" target="_blank">
						HERE
					</a>
					{''} TO VIEW MY RESUME
				</h3>
			</Container>
		</div>
	);
}

export default Resume;
