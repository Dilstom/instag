import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

import ClickButton from './components/Buttons/ClickButton';
import HoverButton from './components/Buttons/HoverButton';

import ButtonGenerator from './components/HOC/ButtonGenerator';

const HOCClickButton = ButtonGenerator(ClickButton);
const HOCHoverButton = ButtonGenerator(HoverButton);

class App extends React.Component {
 constructor() {
  super();
  this.state = {
   posts: [],
   comment: '',
   count: 0,
  };
 }

 componentDidMount() {
  this.setState({ posts: dummyData });
 }

 render() {
  //   console.log(this.state.dummyD);
  return (
   <div className="App">
    <SearchBar />
    <div className="wrapper">
     <PostContainer posts={this.state.posts} />
    </div>
    <HOCClickButton />
    <HOCHoverButton />
    {/* <Button count={this.state.count} incrementCount={this.incrementCount} /> */}
   </div>
  );
 }
}

export default App;
