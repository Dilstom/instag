import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
 constructor() {
  super();
  this.state = {
   dummyD: [],
  };
 }

 componentDidMount() {
  this.setState({ dummyD: dummyData });
 }

 render() {
  //   console.log(this.state.dummyD);
  return (
   <div className="App">
    <SearchBar />
    <div className="wrapper">
     {this.state.dummyD.map(post => {
      return <PostContainer key={Math.random(Date.now())} post={post} />;
     })}
    </div>
   </div>
  );
 }
}

export default App;
