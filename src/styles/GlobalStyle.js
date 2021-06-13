import * as styled from 'styled-components';

export const GlobalStyle = styled.createGlobalStyle`
	:root {
		/* Colors */
		--lavender: #d9d9f9;
		--lavenderlight: #f0f3ff;
		--lightblue: #2b2bde;
		--link: #0019f6;
		--nav: #fff;
		--cardbg: #151515;
		--Styledlinks: #394ae4;

		--border: 1.5px solid #fff;
		--radius: 0.9rem;
		--card-radius: 15px 15px 0px 0px;
		/* --zindex-max: 99999; */

		/* Font Weights */
		--regular: 400;
		--semi-medium: 500;
		--medium: 600;
		--semi-bold: 700;
		--bold: 800;
	}

	html,
	body {
		position: relative;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		overflow: hidden;
		height: 100%;
		width: 100vw;
		color: #fff;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-family: 'Inter', sans-serif;
		background: linear-gradient(116.2deg, #d9e5fa -0.48%, #fad9f3 102.36%);
	}

	*,
	*:before,
	*:after {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
	video {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
	button {
		border: none;
		cursor: pointer;
		outline: none;
	}
	div,
	p {
		outline: none;
	}
	a {
		text-decoration: none;
	}
	button:hover {
		background: #d1d1e6;
	}
	ul {
		list-style: none;
		display: inline-block;
	}
	li {
		/* display: inline-block; */
		list-style: none;
		display: inline-block;
	}
`;
