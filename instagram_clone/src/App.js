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
  const newPosts = this.state.posts.filter(p => {
   if (p.username.includes(e.target.value)) {
    return p;
   }
  });
  this.setState({ filteredPosts: newPosts });
 };

 componentDidMount() {
  this.setState({ posts: dummyData });
 }

 render() {
  return (
   <div className="App">
    <SearchBar posts={this.state.posts} handleFilter={this.handleFilter} />
    <div className="wrapper">
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
   </div>
  );
 }
}

// export default App;
export default Authenticate(App);
