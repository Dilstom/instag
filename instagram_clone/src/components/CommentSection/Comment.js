import React from 'react';
import './CommentSection.css';

const Comment = props => {
 console.log('props in comment: ', props);
 return (
  <div className="textPad eachComment">
   <b>{props.comment.username}</b> {props.comment.text}
  </div>
 );
};

export default Comment;
