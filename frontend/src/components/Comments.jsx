import React from "react";

const comments = [
  {
    id: 1,
    text: "This is the first comment",
    replies: [
      {
        id: 2,
        text: "This is a reply to the first comment",
        replies: [
          {
            id: 3,
            text: "This is a nested reply",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    text: "This is another top-level comment",
    replies: [],
  },
];

const Comment = ({ comment }) => {
  return (
    <div
      style={{
        marginLeft: "20px",
        borderLeft: "1px solid #ccc",
        paddingLeft: "10px",
      }}
    >
      <p>{comment.text}</p>

      {/* 👇 Recursive rendering of replies */}
      {comment.replies?.length > 0 && (
        <div>
          {comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

const CommentList = () => {
  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
