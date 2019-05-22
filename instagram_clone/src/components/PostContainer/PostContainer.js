import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
 console.log('props in post container: ', props);
 return (
  <div>
   <img src={props.post.imageUrl} alt="image" />
   {props.post.comments.map(comment => {
    return <CommentSection key={Math.random(Date.now())} comment={comment} />;
   })}
  </div>
 );
};

export default PostContainer;
