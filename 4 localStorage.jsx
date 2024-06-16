import React, { useState } from "react";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		localStorage.setItem("username", username);
		localStorage.setItem("password", password);
	};

	return (
		<div>
			<h2>Login</h2>
			<div>
				<label>
					Username:
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</label>
			</div>
			<div>
				<label>
					Password:
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
			</div>
			<button onClick={handleLogin}>Login</button>
		</div>
	);
}

export default Login;
