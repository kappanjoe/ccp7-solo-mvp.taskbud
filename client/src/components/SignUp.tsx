import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../contexts/Auth';

function SignUp() {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { auth } = useAuth();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const { error } = await auth.signUp({ email, password });

		if (error) {
			console.error(error);
		} else {
			navigate('/home');
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h1>Welcome Back!</h1>
				<label>
					Email
					<input
						id="signup-email"
						type="email"
						placeholder='someone@somewhere.net'
						value={email}
						onChange={(e) => {
							setEmail(e.target.value)
						}}
					/>
				</label>
				<br/>
				<label>
					Password
					<input
						id="signup-pw"
						type="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value)
						}}
					/>
				</label>
				<br/>
				<button type="submit">Sign Up</button>
			</form>
			<p>
				Already have an account? <Link to="/">Click here to log in.</Link>
			</p>
		</div>
	);
};

export default SignUp;
