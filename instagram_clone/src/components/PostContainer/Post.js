import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

class Post extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   post: props.post,
   flagOne: 'one',
  };
 }

 handleClick() {
  //   this.setState({ flag: !this.state.flag });
  console.log('flag: ', this.state.post);
 }

 render() {
  console.log('props in Post: ', this.props);
  return (
   <div className="card_wrapper">
    <b>
     <p className="textPad float-left userHeader">
      <img
       src={this.state.post.thumbnailUrl}
       alt="thumbnail"
       className="thumb"
      />
      {this.state.post.username}
     </p>
    </b>
    <div>
     <img className="img-fluid" src={this.state.post.imageUrl} alt="Post" />
    </div>
    <div className="flexDivs">
     <div className="socialIcon" onClick={this.handleClick}>
      <i className="far fa-heart" />
     </div>
     <div className="socialIcon toggleIcon">
      <i className="fas fa-heart redColor" />
     </div>
     <div className="socialIcon">
      <i className="far fa-comment" />
     </div>
    </div>
    <CommentSection comments={this.state.post.comments} />
   </div>
  );
 }
}

export default Post;
