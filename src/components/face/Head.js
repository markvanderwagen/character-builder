import React from "react";
import styled from "styled-components";
import femaleHead from "./femaleHead.png";
import maleHead from "./maleHead.png";
import oldFemaleHead from "./oldFemaleHead.png";
import oldMaleHead from "./oldMaleHead.png";
import moment from "moment";

const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
	margin-top: 10%;
	display: block;
	justify-content: center;
`;

const Img = styled.img`
	margin-left: auto;
	margin-right: auto;
	display: block;
`;

const Head = ({ dateOfBirth, gender }) => {
	const getSrc = () => {
		const years = moment().diff(dateOfBirth, "years", false);

		if (years >= 50) {
			if (gender === "Male") {
				return oldMaleHead;
			} else {
				return oldFemaleHead;
			}
		} else {
			if (gender === "Male") {
				return maleHead;
			} else {
				return femaleHead;
			}
		}
	};

	return <Container>{<Img src={getSrc()} alt="female head" />}</Container>;
};

export default Head;
