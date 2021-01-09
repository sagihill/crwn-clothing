import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { SignInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

const emptyState = {
	email: "",
	password: "",
};

export class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = emptyState;
	}

	handleSubmit = (event) => {
		event.preventDefault();

		this.setState(emptyState);
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2 className="title">I already have an account</h2>
				<span className="call-for-action">Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit} className="">
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
					<div className="buttons">
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton onClick={SignInWithGoogle} isGoogleSignIn>
							{" "}
							Sign In With Google{" "}
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
