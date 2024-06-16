import React, { useState } from "react";

function CommentSection() {
	const [comments, setComments] = useState([]);
	const [newComment, setNewComment] = useState("");

	const handleAddComment = () => {
		setComments([...comments, newComment]);
		setNewComment("");
	};

	return (
		<div>
			<h2>Comments</h2>
			<div>
				{comments.map((comment, index) => (
					<p
						key={index}
						dangerouslySetInnerHTML={{ __html: comment }}
					/>
				))}
			</div>
			<input
				type="text"
				value={newComment}
				onChange={(e) => setNewComment(e.target.value)}
				placeholder="Add a comment"
			/>
			<button onClick={handleAddComment}>Add Comment</button>
		</div>
	);
}

export default CommentSection;
