import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import PropTypes from 'prop-types';

const PostContainer = props => {
 console.log('props in post container: ', props);
 return (
  <div className="card_wrapper">
   <b>
    <p className="textPad float-left userHeader">
     <img src={props.post.thumbnailUrl} alt="thumbnail" className="thumb" />{' '}
     {props.post.username}
    </p>
   </b>
   <div>
    <img className="img-fluid" src={props.post.imageUrl} alt="Post" />
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

PostContainer.propTypes = {
 post: PropTypes.shape({
  img: PropTypes.string,
  username: PropTypes.string,
  comments: PropTypes.array,
  thumbnailUrl: PropTypes.string,
 }),
};
export default PostContainer;
