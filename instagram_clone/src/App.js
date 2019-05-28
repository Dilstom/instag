import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

import ClickButton from './components/Buttons/ClickButton';
import HoverButton from './components/Buttons/HoverButton';

import ButtonGenerator from './components/HOC/ButtonGenerator';
import Authenticate from './components/HOC/Authenticate';

const HOCClickButton = ButtonGenerator(ClickButton);
const HOCHoverButton = ButtonGenerator(HoverButton);
// const Auth = Authenticate(App);

class App extends React.Component {
 constructor() {
  super();
  this.state = {
   posts: [],
   comment: '',
   count: 0,
   user: '',
   filteredPosts: [],
  };
 }

 handleFilter = e => {
  //   console.log(this.props.posts);
  //   this.setState({ user: e.target.value });
  //   const arrayNew = this.state.posts.map(user => user.username);
  //   console.log('array: ', arrayNew);
  //   let results = fuzzy.filter(this.state.user, arrayNew);
  //   let matches = results.map(function(el) {
  //    return el.string;
  //   });
  //   console.log('matches: ', matches);
  const newPosts = this.state.posts.filter(p => {
   if (p.username.includes(e.target.value)) {
    return p;
   }
  });
  //   if(this.)
  this.setState({ filteredPosts: newPosts });
  //   if (this.state.filteredPosts.length > 0) {
  //    this.setState({ posts: newPosts });
  //   } else {
  //    this.setState({ posts: dummyData });
  //   }
 };

 componentDidMount() {
  this.setState({ posts: dummyData });
 }

 render() {
  //   console.log(this.state.dummyD);
  //   {this.state.}
  return (
   <div className="App">
    <SearchBar posts={this.state.posts} handleFilter={this.handleFilter} />
    <div className="wrapper">
     {/* <Login /> */}
     <PostContainer
      posts={
       this.state.filteredPosts.length > 0
        ? this.state.filteredPosts
        : this.state.posts
      }
     />
    </div>
    <HOCClickButton />
    <HOCHoverButton />
    {/* <Button count={this.state.count} incrementCount={this.incrementCount} /> */}
   </div>
  );
 }
}

// export default App;
export default Authenticate(App);
