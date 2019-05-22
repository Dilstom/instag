import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
 constructor() {
  super();
  this.state = {
   dummyD: dummyData,
  };
 }
 render() {
  //   console.log(this.state.dummyD);
  return (
    <div className="App">
    {this.state.dummyD.map(post => {
     return <PostContainer key={Math.random(Date.now())} post={post} />;
    })}
    </div>
  );
}
}

export default App;
