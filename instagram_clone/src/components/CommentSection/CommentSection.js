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

 submitHandler = e => {
  e.preventDefault();
  // build out our comment obj
  // clone our comments array
  // push obj into new clone
  // set new clone as state... + reset our comment string
  const newObj = {
   username: localStorage.getItem('user'),
   text: this.state.comment,
  };
  const commentsCopy = this.state.comments.slice();
  commentsCopy.push(newObj);
  this.setState({ comments: commentsCopy, comment: '' });
 };

 render() {
  //   console.log('props in comments: ', this.props);
  return (
   <div>
    <div className="textPad eachComment">
     {this.state.comments.map(comment => {
      return <Comment key={Math.random()} comment={comment} />;
     })}
    </div>
    <CommentInput
     changeHandler={this.changeHandler}
     comment={this.state.comment}
     submitHandler={this.submitHandler}
    />
   </div>
  );
 }
}

CommentSection.propTypes = {
 comments: PropTypes.arrayOf(
  PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
 ),
};

export default CommentSection;
