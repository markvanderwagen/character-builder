import Head from "./face/Head";
import Torso from "./torso/Torso";
import Legs from "./legs/Legs";
import Blurb from "./blurb/Blurb";
import styled from "styled-components";

const Container = styled.div`
	margin-left: -50px;
`;

const Body = ({ fields }) => {
	return (
		<Container>
			<Head dateOfBirth={fields.dateOfBirth} gender={fields.gender} />
			<Torso occupation={fields.occupation} />
			<Legs favColour={fields.favColour} />
			<Blurb name={fields.name} surname={fields.surname} dateOfBirth={fields.dateOfBirth} occupation={fields.occupation} />
		</Container>
	);
};

export default Body;
