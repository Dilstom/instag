import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
 console.log('props in Post: ', props);
 return (
  <div className="card_wrapper">
   <b>
    <p className="textPad float-left userHeader">
     <img src={props.post.thumbnailUrl} alt="thumbnail" className="thumb" />
     {props.post.username}
    </p>
   </b>
   <div>
    <img className="img-fluid" src={props.post.imageUrl} alt="Post" />
   </div>
   <CommentSection comments={props.post.comments} />
  </div>
 );
};

export default Post;
