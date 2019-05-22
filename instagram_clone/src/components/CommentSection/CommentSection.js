import React from 'react';

const CommentSection = props => {
 console.log('props in comments: ', props);
 return (
  <div>
   <b>User: {props.comment.username}</b>
   <p>Post: {props.comment.text}</p>
  </div>
 );
};

export default CommentSection;
