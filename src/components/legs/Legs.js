import React from "react";
import styled from "styled-components";
import { ReactComponent as Pants } from "./pants.svg";

const Container = styled.div`
	width: 150px;
	margin-left: auto;
	margin-right: auto;
	margin-top: -43px;
	display: block;
	padding-left: 32px;
`;

const Legs = ({ favColour }) => {
	return <Container>{<Pants fill={favColour} />}</Container>;
};

export default Legs;
