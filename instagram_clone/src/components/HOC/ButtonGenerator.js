import React from 'react';

// ButtonGenerator(ClickButton)
const ButtonGenerator = Button =>
 class extends React.Component {
  constructor() {
   super();
   this.state = {
    count: 0,
   };
  }

  incrementCount = () => {
   // beter practice
   this.setState(prevState => {
    return {
     count: prevState.count + 1,
    };
   });
  };

  render() {
   return (
    <Button incrementCount={this.incrementCount} count={this.state.count} />
   );
  }
 };

export default ButtonGenerator;
