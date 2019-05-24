import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
 constructor() {
  super();
  this.state = {
   posts: [],
   comment: '',
  };
 }

 componentDidMount() {
  this.setState({ posts: dummyData });
 }

 //  handleChange = e => {
 //   e.preventDefault();
 //   this.setState({ comment: e.target.value });
 //   console.log('this state message: ', this.state.comment);
 //  };

 render() {
  //   console.log(this.state.dummyD);
  return (
   <div className="App">
    <SearchBar />
    <div className="wrapper">
     <PostContainer posts={this.state.posts} />
     {/* <div className="wrapper">
     {this.state.dummyD.map(post => {
      return (
       <PostContainer
        key={Math.random(Date.now())}
        post={post}
        comment={this.state.comment}
        onChangeProps={this.handleChange}
       />
      );
     })} */}
    </div>
   </div>
  );
 }
}

export default App;
