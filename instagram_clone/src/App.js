import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
// import Login from './components/Login/Login';

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
     {/* <Login /> */}
     <PostContainer posts={this.state.posts} />
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
