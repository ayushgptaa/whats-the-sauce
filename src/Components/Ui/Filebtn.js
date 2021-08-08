/** @format */

import React from 'react';
import { FiFolderPlus, FiLink2 } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import styled from 'styled-components';
import { respondTo } from 'styles/mixins';

const Button = styled.button`
	/* display: flex; */
	border-radius: 50%;
	height: 40px;
	width: 40px;
	border: none;
	background: var(--lavender);
	cursor: pointer;
	margin: 1.4rem 0.5rem 0 0;
	cursor: pointer;
	${respondTo.sm`
		margin: 1rem 0.6rem 0 0;
	`}
	${respondTo.md`
		margin: 0.7rem 0.6rem 0 0;
	`}
`;

export const Filebtn = ({ open, toggleurl, key1, key2 }) => {
	return (
		<>
			<Button onClick={open} key={key1}>
				<IconContext.Provider value={{ size: '1.1rem', color: '#303133' }}>
					<FiFolderPlus />
				</IconContext.Provider>
			</Button>
			<Button onClick={toggleurl} key={key2}>
				<IconContext.Provider value={{ size: '1.1rem', color: '#303133' }}>
					<FiLink2 />
				</IconContext.Provider>
			</Button>
		</>
	);
};
