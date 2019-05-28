import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

class Post extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   post: props.post,
   flag: false,
   count: 0,
  };
 }

 handleClick = e => {
  e.preventDefault();
  //   https://stackoverflow.com/questions/41043419/reactjs-onclick-state-change-one-step-behind
  this.setState({ flag: !this.state.flag }, () => {
   let count = this.state.count;
   if (this.state.flag) {
    count = count + 1;
   } else {
    count = count - 1;
   }
   this.setState({ count });
  });
 };

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
     <div
      className={
       this.state.flag
        ? 'socialIcon toggleIconNone'
        : 'socialIcon toggleIconBlock'
      }
     >
      <i className="far fa-heart" onClick={this.handleClick} />
     </div>
     <div
      className={
       this.state.flag
        ? 'socialIcon toggleIconBlock'
        : 'socialIcon toggleIconNone'
      }
     >
      <i className="fas fa-heart redColor" onClick={this.handleClick} />
     </div>
     <div className="socialIcon">
      <i className="far fa-comment" />
     </div>
    </div>
    <div className="textPad mt-2">
     <b>{this.state.count} likes</b>
    </div>
    <CommentSection comments={this.state.post.comments} />
   </div>
  );
 }
}

export default Post;
