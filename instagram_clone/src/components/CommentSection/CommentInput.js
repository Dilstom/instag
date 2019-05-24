import React from 'react';
import './CommentSection.css';

const CommentInput = props => {
 return (
  <div>
   <form onSubmit={props.onclickProps}>
    <input
     className="inputField"
     value={props.comment}
     name="comment"
     onChange={props.onChangeProps}
     placeholder="Add a comment... "
    />
   </form>
  </div>
 );
};

export default CommentInput;
