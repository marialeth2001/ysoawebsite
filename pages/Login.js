import React, { useState } from 'react';


function Login() {
	const [userType, setUserType] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ userType, username, password });
	};

    	return (
		<div className="login-page"> 
			<div className="login-container">
				<h1>Login</h1>
				<form onSubmit={handleSubmit}>
					<label htmlFor="userType">I am a:</label>
					<select id="userType" value={userType} onChange={(e) => setUserType(e.target.value)} required>
						<option value="student">Student</option>
						<option value="staff">Staff</option>
						<option value="alumni">Alumni</option>
					</select>

					<label htmlFor="username">Username:</label>
					<input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />

					<label htmlFor="password">Password:</label>
					<input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

					<button type="submit">Login</button>
				</form>
			</div>
		</div>
    );
}

export default Login;

