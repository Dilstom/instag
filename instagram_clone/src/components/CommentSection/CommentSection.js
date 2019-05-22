import React from 'react';
import './CommentSection.css';

const CommentSection = props => {
 console.log('props in comments: ', props);
 return (
  <div className="textPad eachComment">
   <b>{props.comment.username}</b> {props.comment.text}
  </div>
 );
};

export default CommentSection;
