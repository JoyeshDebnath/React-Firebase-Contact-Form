import React, { useState } from "react";
import "../App.css";
import { db } from "../firebase/firebase";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [loader, setLoader] = useState(false);

	// handleSubmit()

	const handleSubmit = (event) => {
		event.preventDefault();
		setLoader(true);
		db.collection("contacts")
			.add({
				Name: name,
				Email: email,
				Message: message,
			})
			.then(() => {
				setLoader(false);
				alert("Your Message Has Been Send To Joyesh!!Have A great Day!🙋‍♂️");
			})
			.catch((error) => {
				setLoader(false);
				alert(error.message);
			});

		// set all the inputs to default
		setName("");
		setEmail("");
		setMessage("");
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<h1>Contact ME🚀🧏</h1>

			<label>Name:</label>
			<input
				type="text"
				placeholder="Enter your Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>

			<label>Email📨:</label>
			<input
				type="email"
				placeholder="Enter your Email id "
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>

			<label>Message :</label>
			<textarea
				placeholder="Enter your Message"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>

			<button
				type="submit"
				style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
			>
				Mail ME✌️
			</button>
		</form>
	);
};

export default Contact;
