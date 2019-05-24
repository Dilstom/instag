import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import PropTypes from 'prop-types';
import Post from './Post';

const PostContainer = props => {
 //  console.log('props', props);
 return (
  <div>
   {props.posts.map(post => (
    <Post key={post.imageUrl} post={post} />
   ))}
  </div>
 );
};

// PostContainer.propTypes = {
//  post: PropTypes.shape({
//   img: PropTypes.string,
//   username: PropTypes.string,
//   comments: PropTypes.array,
//   thumbnailUrl: PropTypes.string,
//  }),
// };
export default PostContainer;
