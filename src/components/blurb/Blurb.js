import React from "react";
import styled from "styled-components";
import moment from "moment";

const Container = styled.div`
	width: 300px;
	color: white;
	text-align: center;
	position: absolute;
	right: 0;
	top: 220px;
	margin-right: 300px;
	float: top;
	font-family: Arial;
`;

const Blurb = ({ name, surname, dateOfBirth, occupation }) => {
	const years = moment().diff(dateOfBirth, "years", false);

	return (
		<Container>
			<h1>
				Hi! My name is {name} {surname}!
			</h1>
			<p>
				I am {years} and I work as a {occupation}!
			</p>
		</Container>
	);
};

export default Blurb;
