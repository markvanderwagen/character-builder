import React from "react";
import styled from "styled-components";
import chef from "./chef.png";
import socialMedia from "./social-media.png";
import yoga from "./yoga.png";
import developer from "./developer.png";

const Img = styled.img`
	margin-left: auto;
	width: 400px;
	margin-right: auto;
	display: block;
	margin-top: -3px;
	padding-left: 13px;
`;

const Torso = ({ occupation }) => {
	const getOccupation = () => {
		if (occupation === "Chef") {
			return chef;
		} else if (occupation === "Social Media Influencer") {
			return socialMedia;
		} else if (occupation === "Yoga Instructor") {
			return yoga;
		} else if (occupation === "Developer") {
			return developer;
		}
	};

	return <div>{<Img src={getOccupation()} alt="" />}</div>;
};

export default Torso;
