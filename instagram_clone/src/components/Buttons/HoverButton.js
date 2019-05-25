import React from 'react';

const HoverButton = props => {
 return (
  <button onMouseEnter={() => props.incrementCount()}>
   Hover Button {props.count}
  </button>
 );
};

export default HoverButton;
