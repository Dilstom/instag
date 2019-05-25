import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   comments: props.comments,
   comment: '',
  };
 }

 changeHandler = e => {
  this.setState({ comment: e.target.value });
  console.log(this.state.comment);
 };
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
