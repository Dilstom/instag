import React from 'react';
import './CommentSection.css';

const CommentInput = props => {
 return (
  <div>
   <form onSubmit={props.submitHandler}>
    <input
     type="text"
     // with the value this field can be reset
     value={props.comment}
     className="inputField"
     onChange={props.changeHandler}
     placeholder="Add a comment... "
    />
   </form>
  </div>
 );
};

export default CommentInput;
