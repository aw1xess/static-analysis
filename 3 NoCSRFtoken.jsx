import React, { useState } from "react";

function ChangePassword() {
	const [newPassword, setNewPassword] = useState("");

	const handleChangePassword = () => {
		fetch("http://example.com/api/change-password", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				newPassword: newPassword,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.success) {
					alert("Password changed successfully!");
				} else {
					alert("Error changing password.");
				}
			})
			.catch((error) => {
				console.error("Error:", error);
				alert("Error changing password.");
			});
	};

	return (
		<div>
			<div>
				<label>
					New Password:
					<input
						type="password"
						value={newPassword}
						onChange={(e) => setNewPassword(e.target.value)}
					/>
				</label>
			</div>
			<button onClick={handleChangePassword}>Change Password</button>
		</div>
	);
}

export default ChangePassword;
