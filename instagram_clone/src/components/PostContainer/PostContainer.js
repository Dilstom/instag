import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const PostContainer = props => {
 console.log('props in post container: ', props);
 return (
  <div className="card_wrapper">
   <b>
    <p className="textPad float-left userHeader">
     <img
      src={props.post.thumbnailUrl}
      alt="image thumbnail"
      className="thumb"
     />{' '}
     {props.post.username}
    </p>
   </b>
   <div>
    <img className="img-fluid" src={props.post.imageUrl} alt="image" />
   </div>
   {props.post.comments.map(comment => {
    return <CommentSection key={Math.random(Date.now())} comment={comment} />;
   })}
   <p>
    <input className="inputField" placeholder="Add a comment..." />
   </p>
  </div>
 );
};

export default PostContainer;
