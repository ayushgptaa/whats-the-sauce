/** @format */

import React from 'react';
import Overlay from '../Ui/Overlay';
import styled from 'styled-components';
import Errorgif from './chika.gif';
import { respondTo } from '../../styles/mixins';

const Container = styled.div`
	width: 280px;
	height: 280px;
	z-index: 200;
	background: var(--cardbg);
	border-radius: 15px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	${respondTo.xs`
		height: 320px;
		width: 400px;
	`}
	${respondTo.sm`
		height: 400px;
		width: 450px;
	`}

	${respondTo.lg` {
		height: 450px;
		width: 550px;
	`}
`;

const Gif = styled.div`
	width: 100%;
	border-radius: 15px;

	img {
		border-radius: 15px 15px 0 0;
	}
`;

const Errormsg = styled.div`
	text-align: center;
	color: var(--lavender);
	padding: 1rem;

	h3 {
		font-weight: var(--regular);
		font-size: 1rem;
		margin-top: 0.5rem;
		${respondTo.sm`
		font-size: 1.5rem;
		`}
		${respondTo.lg`
		font-size: 1.6rem;
		font-weight: var(--semi-medium);
		`}
	}
`;

export const Errorcard = () => {
	return (
		<>
			<Overlay />
			<Container>
				<Gif>
					<img src={Errorgif} alt="Error" />
				</Gif>
				<Errormsg>
					<h3>Sāba-chan is a little busy at the moment </h3>
					<h3>Sāba-chan ganbatteimasu 😓</h3>
				</Errormsg>
			</Container>
		</>
	);
};
