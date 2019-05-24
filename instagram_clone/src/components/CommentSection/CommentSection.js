import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

const CommentSection = props => {
 console.log('props in comments: ', props);
 return (
  <div>
   <div className="textPad eachComment">
    {props.comments.map(comment => {
     return <Comment key={Math.random()} comment={comment} />;
    })}
   </div>
   <CommentInput />
  </div>
 );
};

// CommentSection.propTypes = {
//  comment: PropTypes.shape({
//   text: PropTypes.string,
//   username: PropTypes.string,
//  }),
// };

export default CommentSection;
