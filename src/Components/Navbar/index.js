import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { GoMarkGithub } from 'react-icons/go';

const Navbar = styled.nav`
	padding: 0.7rem 2rem;
	background: var(--nav);
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 35px;
	width: 90%;
	margin: auto;
	margin-top: 1rem;
	mix-blend-mode: normal;
	filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));

	@media (min-width: 900px) {
		margin-top: 2.5rem;
		width: 600px;
	}
`;

const Title = styled.h1`
	font-size: 1.2rem;
	font-weight: var(--medium);
	color: #000;
`;

const index = () => {
	return (
		<>
			<Navbar>
				<Title>WhatstheSauce</Title>
				<a
					href="https://github.com/Ayush6968/whats-the-sauce"
					target="_blank"
					rel="noreferrer">
					<IconContext.Provider value={{ size: '1.6rem', color: '#000000' }}>
						<GoMarkGithub />
					</IconContext.Provider>
				</a>
			</Navbar>
		</>
	);
};

export default index;
