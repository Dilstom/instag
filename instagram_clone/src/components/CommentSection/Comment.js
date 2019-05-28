import React from 'react';
import './CommentSection.css';

const Comment = props => {
 return (
  <div className=" eachComment">
   <b>{props.comment.username}</b> {props.comment.text}
  </div>
 );
};

export default Comment;
