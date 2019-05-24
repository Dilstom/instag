import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

const CommentSection = props => {
 console.log('props in comments: ', props);
 return (
  <div className="textPad eachComment">
   <b>{props.comment.username}</b> {props.comment.text}
  </div>
 );
};

CommentSection.propTypes = {
 comment: PropTypes.shape({
  text: PropTypes.string,
  username: PropTypes.string,
 }),
};

export default CommentSection;
