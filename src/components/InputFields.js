import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
	opacity: 0.8;
	margin-top: 10%;
	font-family: Arial;
	color: white;
	height: 500px;
	font-size: 10px;
	background-image: linear-gradient(to right, #434343, #000);
	display; block;
	margin-left: auto;
	margin-right: auto;
	width: 380px;
	padding: 20px;
	border-radius 10px;
	box-shadow: 5px 10px #000000;
	-webkit-box-shadow: 0px 3px 50px 0.5px #000000;
	-moz-box-shadow:    0px 3px 50px 0.5px #000000;
	box-shadow:         0px 3px 50px 0.5px #000000;
`;

const InputLabel = styled.label`
	color: white;
	font-size: 25px;
	display: block;
	text-align: center;
	padding-bottom: 5px;
`;

const RadioLabels = styled.label`
	font-size: 25px;
	display: inline-block;
	padding-left: 25px;
	text-align: center;
	margin-left: 10%;
	padding-bottom: 20px;
`;

const Input = styled.input`
	display: block;
	margin-right: auto;
	margin-left: auto;
	width: 300px;
	margin-bottom: 20px;
	height: 30px;
	cursor: pointer;
`;

const Select = styled.select`
	display: block;
	margin-right: auto;
	margin-left: auto;
	width: 307px;
	margin-bottom: 20px;
	height: 30px;
	cursor: pointer;
`;

const InputFields = ({ fields, setFields }) => {
	const handleChange = (e) => {
		setFields({ ...fields, gender: e.target.value });
	};

	return (
		<StyledForm>
			<InputLabel>Name</InputLabel>
			<Input type="text" placeholder="Name" value={fields.name} onChange={(e) => setFields({ ...fields, name: e.target.value })} required />
			<InputLabel>Surname</InputLabel>
			<Input type="text" placeholder="Surname" value={fields.surname} onChange={(e) => setFields({ ...fields, surname: e.target.value })} />
			<InputLabel>Occupation</InputLabel>
			<Select value={fields.occupation} onChange={(e) => setFields({ ...fields, occupation: e.target.value })}>
				<option value="">Select your option</option>
				<option value="Chef">Chef</option>
				<option value="Yoga Instructor">Yoga Instructor</option>
				<option value="Social Media Influencer">Social media influencer</option>
				<option value="Developer">Developer</option>
			</Select>
			<InputLabel>Favourite Colour</InputLabel>
			<Input type="color" value={fields.favColour} onChange={(e) => setFields({ ...fields, favColour: e.target.value })} />
			<InputLabel>Date of birth</InputLabel>
			<Input type="date" value={fields.dateOfBirth} onChange={(e) => setFields({ ...fields, dateOfBirth: e.target.value })} />
			<div>
				<RadioLabels>
					<input type="radio" value="Male" name={fields.gender} onChange={handleChange} />
					Male
				</RadioLabels>
				<RadioLabels>
					<input type="radio" value="Female" name={fields.gender} onChange={handleChange} />
					Female
				</RadioLabels>
			</div>
		</StyledForm>
	);
};

export default InputFields;
