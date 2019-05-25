import React from 'react';

const ClickButton = props => {
 return (
  <button onClick={() => props.incrementCount()}>
   Click Button {props.count}
  </button>
 );
};

export default ClickButton;
