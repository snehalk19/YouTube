import React from "react";
import Comment from "./Comment";

const commentsData = [
  {
    name: "Snehal K",
    text: "Lorem ispum",
    replies: [
      {
        name: "Snehal K",
        text: "Lorem ispum",
        replies: [
          {
            name: "Snehal K",
            text: "Lorem ispum",
            replies: [
              {
                name: "Snehal K",
                text: "Lorem ispum",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Snehal K",
    text: "Lorem ispum",
    replies: [],
  },
  {
    name: "Snehal K",
    text: "Lorem ispum",
    replies: [],
  },
  {
    name: "Snehal K",
    text: "Lorem ispum",
    replies: [],
  },
];

const CommentsList = ({ comments }) => {
  //Dont use index as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5 ">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-xl font-bold">Comment: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
