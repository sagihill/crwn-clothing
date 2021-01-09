import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDoc } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

const emptyState = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

export class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = emptyState;
	}

	handleSubmit = async (event) => {
		event.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert("passwords don't match!");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDoc(user, { displayName });
		} catch (error) {
			console.error(error);
		} finally {
			this.setState(emptyState);
		}
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-up">
				<h2 className="title">I do not have an account</h2>
				<span className="call-for-action">Sign up with your email and password</span>
				<form onSubmit={this.handleSubmit} className="">
					<FormInput
						type="text"
						name="displayName"
						value={this.state.displayName}
						handleChange={this.handleChange}
						required
						label="Display Name"
					/>
					<FormInput
						type="email"
						name="email"
						value={this.state.email}
						handleChange={this.handleChange}
						required
						label="Email"
					/>
					<FormInput
						type="password"
						name="password"
						value={this.state.password}
						handleChange={this.handleChange}
						required
						label="Password"
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						value={this.state.confirmPassword}
						handleChange={this.handleChange}
						required
						label="Confirm Password"
					/>
					<div className="buttons">
						<CustomButton type="submit">Sign Up</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignUp;
