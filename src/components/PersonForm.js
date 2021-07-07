import { useState } from "react";
import styled from "styled-components";
import InputFields from "./InputFields";
import moment from "moment";
import Body from "./Body";

const Container = styled.div`
	margin-top: -50px;
`;

const Button = styled.a`
  font-family: Arial;
  opacity: 0.8;
  font-size: 30px;
  color: white;
  text-align: center;
  display: block;
	width: 380px;
  background-image: linear-gradient(to right, #000, #434343);
  display; block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  cursor: pointer;
  padding: 20px;
  border-radius 10px;
  box-shadow: 5px 10px #FFFFFF;
  -webkit-box-shadow: 0px 3px 50px 0.5px #000000;
  -moz-box-shadow:    0px 3px 50px 0.5px #000000;
  box-shadow:         0px 3px 50px 0.5px #000000;
  
`;

const PersonForm = () => {
	const [fields, setFields] = useState({
		name: "",
		surname: "",
		age: "",
		occupation: "",
		favColour: "#000000",
		dateOfBirth: "",
		gender: "",
	});
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = () => {
		const years = moment().diff(fields.dateOfBirth, "years", false);

		if (years < 18) {
			alert("Too young!");
		} else if (fields.name.concat() === "") {
			alert("Please add your name!");
		} else if (fields.surname.concat() === "") {
			alert("Please add your surname!");
		} else if (fields.occupation.concat() === "") {
			alert("Please add your Occupation!");
		} else if (fields.dateOfBirth.concat() === "") {
			alert("Please add your date of birth!");
		} else if (fields.gender.concat() === "") {
			alert("Please select a gender!");
		} else {
			setIsSubmitted(!isSubmitted);
		}
	};
	return (
		<Container>
			{isSubmitted ? <Body fields={fields} /> : <InputFields fields={fields} setFields={setFields} />}
			<Button onClick={handleSubmit}>{isSubmitted ? "Edit" : "Submit"}</Button>
		</Container>
	);
};

export default PersonForm;
